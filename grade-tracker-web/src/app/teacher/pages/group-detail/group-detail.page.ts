import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class GroupDetailPage {
  group = {
    id: 1,
    name: '5to A',
    subject: 'Español',
    studentsCount: 28,
    pendingReportCards: 3,
  };

  students = [
    { id: 1, name: 'Andrés Jaramillo Barón', average: 9.2, performance: 'Alto' },
    { id: 2, name: 'Emiliano Jaramillo Barón', average: 8.5, performance: 'Medio' },
    { id: 3, name: 'José Luis Martínez Cruz', average: 7.8, performance: 'Medio' },
    { id: 4, name: 'María Fernanda López', average: 9.5, performance: 'Alto' },
  ];
}
