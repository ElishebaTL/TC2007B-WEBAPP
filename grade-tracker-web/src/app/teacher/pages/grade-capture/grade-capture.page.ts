import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-grade-capture',
  templateUrl: './grade-capture.page.html',
  styleUrls: ['./grade-capture.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonButton],
})
export class GradeCapturePage implements OnInit {
  selectedGroupId = 1;
  selectedAssignmentId = 1;
  selectedTrimester = 'segundo trimestre';

  groups: any[] = [];
  trimesters = ['primer trimestre', 'segundo trimestre', 'tercer trimestre'];

  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherApi: TeacherApiService
  ) {}

  ngOnInit(): void {
    const routeGroupId = Number(this.route.snapshot.paramMap.get('groupId'));

    if (routeGroupId) {
      this.selectedGroupId = routeGroupId;
    }

    this.loadGroups();
  }

  loadGroups(): void {
    this.teacherApi.getAssignments().subscribe({
      next: (response) => {
        const assignments = response.data || response;

        this.groups = assignments.map((item: any) => ({
          assignmentId: item.asignacion_id,
          groupId: item.grupo?.grupo_id,
          name: item.grupo?.nombre,
          subject: item.materia?.nombre,
        }));

        const selected =
          this.groups.find((g) => g.groupId === this.selectedGroupId) ||
          this.groups[0];

        if (selected) {
          this.selectedGroupId = selected.groupId;
          this.selectedAssignmentId = selected.assignmentId;
          this.loadGrades();
        }
      },
      error: (error) => {
        console.error('Error al cargar asignaciones:', error);
      },
    });
  }

  onGroupChange(): void {
    const selected = this.groups.find(
      (g) => Number(g.groupId) === Number(this.selectedGroupId)
    );

    if (selected) {
      this.selectedAssignmentId = selected.assignmentId;
      this.loadGrades();
    }
  }

  loadGrades(): void {
    this.teacherApi
      .getGradeTable(this.selectedAssignmentId, this.selectedTrimester)
      .subscribe({
        next: (response) => {
          console.log('Calificaciones desde backend:', response);

          const data = response.data || response;

          this.students = data.map((item: any) => ({
            alumnoId: item.alumno.alumno_id,
            name: `${item.alumno.nombre} ${item.alumno.apellido}`,
            grade: item.calificacion?.nota ?? '',
            comment: item.calificacion?.comentario || '',
            status: item.calificacion ? 'Guardado' : 'Pendiente',
          }));
        },

        error: (error) => {
          console.error('Error al cargar calificaciones:', error);
        },
      });
  }

  saveGrades(): void {
  const calificaciones = this.students
    .filter((student) => student.grade !== '' && student.grade !== null)
    .map((student) => ({
      alumno_id: student.alumnoId,
      nota: Number(student.grade),
      comentario: student.comment || null,
    }));

  const payload = {
    asignacion_id: this.selectedAssignmentId,
    periodo: this.selectedTrimester,
    calificaciones,
  };

  this.teacherApi.saveGradesBulk(payload).subscribe({
    next: () => {
      alert('Calificaciones guardadas correctamente.');
      this.loadGrades();
    },
    error: (error) => {
      console.error('Error al guardar calificaciones:', error);
      alert('No se pudieron guardar las calificaciones.');
    },
  });
}}
