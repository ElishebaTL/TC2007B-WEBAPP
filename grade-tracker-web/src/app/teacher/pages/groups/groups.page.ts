import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class GroupsPage implements OnInit {
  groups: any[] = [];

  constructor(private teacherApi: TeacherApiService) {}

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.teacherApi.getAssignments().subscribe({
      next: (response) => {
        const assignments = response.data || response;
this.groups = assignments.map((item: any) => {
  const grupo = item.grupo || item.group || {};
  const materia = item.materia || item.subject || {};

  console.log('Respuesta asignaciones:', response)
  return {
    id: item.grupo?.grupo_id || item.grupo_id || item.group_id || item.id,
    name:
      grupo.nombre ||
      grupo.name ||
      `${grupo.grado || item.grado}to ${grupo.grupo_letra || item.grupo_letra}`,
    subject:
      materia.nombre_materia ||
      materia.nombre ||
      materia.name ||
      item.nombre_materia ||
      'Materia',
    studentsCount: item.total_alumnos || item.studentsCount || item.students_count || 0,
    pendingReportCards: item.boletas_pendientes || item.pendingReportCards || 0,
  };
});

        console.log('Grupos desde backend:', this.groups);
      },
      error: (error) => {
        console.error('Error al cargar grupos:', error);
      },
    });
  }
}
