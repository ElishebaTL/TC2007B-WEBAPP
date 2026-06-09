import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class GroupsPage {
  groups = [
    {
      id: 1,
      name: '5to A',
      subject: 'Español',
      studentsCount: 28,
      pendingReportCards: 3,
    },
    {
      id: 2,
      name: '5to B',
      subject: 'Español',
      studentsCount: 25,
      pendingReportCards: 1,
    },
    {
      id: 3,
      name: '6to A',
      subject: 'Español',
      studentsCount: 30,
      pendingReportCards: 0,
    },
  ];
}
