import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-report-cards',
  templateUrl: './report-cards.page.html',
  styleUrls: ['./report-cards.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  ],
})
export class ReportCardsPage implements OnInit {
  reportCards: any[] = [];

  constructor(private teacherApi: TeacherApiService) {}

  ngOnInit(): void {
    this.loadReportCards();
  }

  loadReportCards(): void {
    this.teacherApi.getAssignments().subscribe({
      next: (response) => {
        const assignments = response.data || response;

        this.reportCards = assignments.map((item: any) => {
          const grupo = item.grupo || {};
          const materia = item.materia || {};

          return {
            id: item.asignacion_id,
            groupId: grupo.grupo_id,
            groupName:
              grupo.nombre ||
              `${grupo.grado}° ${grupo.grupo_letra}`,
            subject:
              materia.nombre_materia ||
              materia.nombre ||
              'Materia',
            totalStudents: item.total_alumnos || 0,
            signed: 0,
            pending:0,
          };
        });
      },
      error: (error) => {
        console.error('Error al cargar boletas:', error);
      },
    });
  }
}
