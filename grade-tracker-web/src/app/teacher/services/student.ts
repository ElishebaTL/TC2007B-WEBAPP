import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../shared/models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  // DATOS MOCK
  // Usar estos datos mientras el backend no esté listo.
  private students: Student[] = [
    {
      id: 1,
      name: 'Andrés Jaramillo Barón',
      groupId: 1,
      groupName: '5to A',
      average: 9.2,
      performance: 'Alto',
    },
    {
      id: 2,
      name: 'Emiliano Jaramillo Barón',
      groupId: 1,
      groupName: '5to A',
      average: 8.5,
      performance: 'Medio',
    },
    {
      id: 3,
      name: 'Carlos Eduardo Sánchez',
      groupId: 3,
      groupName: '6to A',
      average: 6.8,
      performance: 'Bajo',
    },
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);

    /*
    DATOS CON BACKEND
    Quitar comentario cuando exista conexión real a la API.

    return this.http.get<Student[]>(
      `${environment.appApiUrl}/students`
    );
    */
  }
}
