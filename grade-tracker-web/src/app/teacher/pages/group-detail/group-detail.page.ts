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
  groupId = 1;

  group = {
    id: 1,
    name: 'Grupo',
    subject: 'Materia',
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
    this.groupId = id || 1;
    this.group.id = this.groupId;

    this.loadStudents();
  }

  loadStudents(): void {
    this.teacherApi.getStudentsByGroup(this.groupId).subscribe({
      next: (response) => {
        console.log('Estudiantes desde backend:', response);

        const studentsData = response.data || response;

        this.students = studentsData.map((student: any) => ({
          id: student.alumno_id || student.id,
          name: `${student.nombre} ${student.apellido}`,
          average: student.promedio || 'Pendiente',
          performance: student.rendimiento || 'Pendiente',
        }));

        this.group.studentsCount = this.students.length;
      },
      error: (error) => {
        console.error('Error al cargar estudiantes:', error);
      },
    });
  }
}
