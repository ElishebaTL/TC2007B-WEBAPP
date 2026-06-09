import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grade-capture',
  templateUrl: './grade-capture.page.html',
  styleUrls: ['./grade-capture.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonButton],
})
export class GradeCapturePage {
  selectedGroup = '5to A - Español';
  selectedTrimester = 'Segundo Trimestre';

  groups = ['5to A - Español', '5to B - Español', '6to A - Español'];
  trimesters = ['Primer Trimestre', 'Segundo Trimestre', 'Tercer Trimestre'];

  students = [
    { name: 'Andrés Jaramillo Barón', grade: 9.1, status: 'Guardado' },
    { name: 'Emiliano Jaramillo Barón', grade: 8.3, status: 'Guardado' },
    { name: 'María Fernanda López', grade: 9.4, status: 'Guardado' },
  ];

  saveGrades(): void {
    this.students = this.students.map((student) => ({
      ...student,
      status: 'Guardado',
    }));

    alert('Calificaciones guardadas correctamente.');
  }
}
