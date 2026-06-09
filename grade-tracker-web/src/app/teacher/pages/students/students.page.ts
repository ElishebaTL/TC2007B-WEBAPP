import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent],
})
export class StudentsPage {
  students = [
    { name: 'Andrés Jaramillo Barón', group: '5to A', average: 9.2, performance: 'Alto' },
    { name: 'Emiliano Jaramillo Barón', group: '5to A', average: 8.5, performance: 'Medio' },
    { name: 'María Fernanda López', group: '5to A', average: 9.5, performance: 'Alto' },
    { name: 'José Luis Martínez', group: '5to B', average: 7.8, performance: 'Medio' },
    { name: 'Ana Sofía Ramírez', group: '5to B', average: 9.1, performance: 'Alto' },
    { name: 'Carlos Eduardo Sánchez', group: '6to A', average: 6.8, performance: 'Bajo' },
    { name: 'Valentina Rodríguez', group: '6to A', average: 9.3, performance: 'Alto' },
    { name: 'Diego Alejandro Pérez', group: '6to A', average: 8.7, performance: 'Medio' },
  ];
}
