import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-report-card-detail',
  templateUrl: './report-card-detail.page.html',
  styleUrls: ['./report-card-detail.page.scss'],
  standalone: true,
imports: [
  CommonModule,
  RouterLink,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
],})
export class ReportCardDetailPage implements OnInit {
  assignmentId = 1;

  groupName = 'Grupo';
  subject = 'Materia';

  trimester = 'primer trimestre';
  trimesters = [
  'primer trimestre',
  'segundo trimestre',
  'tercer trimestre',
];

  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherApi: TeacherApiService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.assignmentId = id || 1;

  this.loadAssignmentInfo();
  this.loadReportCardDetail();
}
loadAssignmentInfo(): void {
  this.teacherApi.getAssignments().subscribe({
    next: (response) => {
      const assignments = response.data || response;

      const assignment = assignments.find(
        (a: any) => a.asignacion_id === this.assignmentId
      );

      if (assignment) {
        this.groupName = assignment.grupo?.nombre || 'Grupo';
        this.subject = assignment.materia?.nombre || 'Materia';
      }
    },
    error: (error) => {
      console.error('Error al cargar asignación:', error);
    },
  });
}

  loadReportCardDetail(): void {
    this.teacherApi.getGradeTable(this.assignmentId, this.trimester).subscribe({
      next: (response) => {
        console.log('Detalle boleta:', response);

        const data = response.data || response;

        this.students = data.map((item: any) => ({
          name: `${item.alumno.nombre} ${item.alumno.apellido}`,
          average: item.calificacion?.nota ?? 'Pendiente',
          signed: !!item.calificacion,
        }));
      },
      error: (error) => {
        console.error('Error al cargar detalle de boletas:', error);
      },
    });
  }

  changeTrimester(event: Event): void {
  const target = event.target as HTMLSelectElement;

  this.trimester = target.value;

  this.loadReportCardDetail();
}

  get signedCount(): number {
    return this.students.filter((student) => student.signed).length;
  }

  get pendingCount(): number {
    return this.students.filter((student) => !student.signed).length;
  }

  getSignatureStatus(student: any): string {
  return student.signed ? 'Firmada' : 'Pendiente';
}

  downloadPdf(): void {
    alert('Función de descarga PDF pendiente de integración.');
  }

  sendReminder(): void {
    alert('Función de recordatorio pendiente de integración.');
  }
}

