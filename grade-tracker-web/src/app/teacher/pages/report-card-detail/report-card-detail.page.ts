import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
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
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  ],
})
export class ReportCardDetailPage {
  groupName = '5to A';
  subject = 'Español';
  trimester = 'Segundo Trimestre';

  students = [
    { name: 'Andrés Jaramillo Barón', average: 9.2, signed: true },
    { name: 'Emiliano Jaramillo Barón', average: 8.5, signed: true },
    { name: 'José Luis Martínez Cruz', average: 7.8, signed: false },
    { name: 'María Fernanda López', average: 9.5, signed: true },
  ];

  get signedCount(): number {
    return this.students.filter((student) => student.signed).length;
  }

  get pendingCount(): number {
    return this.students.filter((student) => !student.signed).length;
  }

  downloadPdf(): void {
    console.log('DATOS MOCK - descargar PDF de boletas');
  }

  sendReminder(): void {
    console.log('DATOS MOCK - enviar recordatorio a padres pendientes');
  }
}
