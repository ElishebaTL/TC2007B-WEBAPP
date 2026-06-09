import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonButton],
})
export class ReportsPage {
  groupAverages = [
    { group: '5to A', average: 9.0 },
    { group: '5to B', average: 8.6 },
    { group: '6to A', average: 8.5 },
  ];

  riskStudents = [
    {
      name: 'Carlos Eduardo Sánchez',
      group: '6to A',
      average: 6.8,
    },
  ];

  exportReport(): void {
    alert('Reporte exportado correctamente.');
  }
}
