import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class GroupDetailPage implements OnInit {
  assignmentId = 1;
  groupId = 1;

  group = {
    id: 1,
    name: 'Grupo no disponible',
    subject: 'Sin materia asignada',
    studentsCount: 0,
    pendingReportCards: 0,
  };

  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherApi: TeacherApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentId = id || 1;
    this.group.id = this.assignmentId;

    this.loadAssignmentInfo();
  }

  loadAssignmentInfo(): void {
    this.teacherApi.getAssignments().subscribe({
      next: (response) => {
        const assignments = response.data || response;

        const assignment = assignments.find(
          (a: any) => Number(a.asignacion_id) === Number(this.assignmentId)
        );

        if (assignment) {
          const grupo = assignment.grupo || {};
          const materia = assignment.materia || {};

          this.groupId = grupo.grupo_id;

          this.group = {
            id: this.assignmentId,
            name: grupo.nombre || `${grupo.grado}° ${grupo.grupo_letra}`,
            subject:
              materia.nombre_materia ||
              materia.nombre ||
              'Sin materia asignada',
            studentsCount: 0,
            pendingReportCards: assignment.boletas_pendientes || 0,
          };

          this.loadStudents();
        }
      },
      error: (error) => {
        console.error('Error al cargar asignación:', error);
      },
    });
  }

  loadStudents(): void {
    this.teacherApi
      .getGradeTable(this.assignmentId, 'primer trimestre')
      .subscribe({
        next: (response) => {
          const data = response.data || response;

          this.students = data.map((item: any) => {
            const grade = item.calificacion?.nota ?? null;

            return {
              id: item.alumno.alumno_id,
              name: `${item.alumno.nombre} ${item.alumno.apellido}`,
              average: grade !== null ? grade : 'Sin calificación',
              performance: this.getPerformance(grade),
            };
          });

          this.group.studentsCount = this.students.length;
        },
        error: (error) => {
          console.error('Error al cargar estudiantes con calificaciones:', error);
        },
      });
  }

  getPerformance(grade: number | null): string {
    if (grade === null) return 'Sin registro';
    if (grade >= 9) return 'Alto';
    if (grade >= 7) return 'Medio';
    return 'Bajo';
  }
}
