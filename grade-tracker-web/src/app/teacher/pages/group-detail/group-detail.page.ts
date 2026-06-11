import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class GroupDetailPage {
  groupId = 1;

  group = {
    id: 1,
    name: '5to A',
    subject: 'Español',
    studentsCount: 28,
    pendingReportCards: 3,
  };

  students = [
    { name: 'Andrés Jaramillo Barón', average: 9.2, performance: 'Alto' },
    { name: 'Emiliano Jaramillo Barón', average: 8.5, performance: 'Medio' },
    { name: 'José Luis Martínez Cruz', average: 7.8, performance: 'Medio' },
    { name: 'María Fernanda López', average: 9.5, performance: 'Alto' },
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupId = id || 1;
  }
}
