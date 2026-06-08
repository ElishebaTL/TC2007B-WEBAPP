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
  selector: 'app-report-cards',
  templateUrl: './report-cards.page.html',
  styleUrls: ['./report-cards.page.scss'],
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
export class ReportCardsPage {
  reportCards = [
    {
      id: 1,
      groupName: '5to A',
      subject: 'Español',
      totalStudents: 28,
      signed: 25,
      pending: 3,
    },
    {
      id: 2,
      groupName: '5to B',
      subject: 'Español',
      totalStudents: 25,
      signed: 24,
      pending: 1,
    },
    {
      id: 3,
      groupName: '6to A',
      subject: 'Español',
      totalStudents: 30,
      signed: 30,
      pending: 0,
    },
  ];
}
