import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from '../../shared/models/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  // DATOS MOCK
  // Usar mientras el backend no esté listo.

  private groups: Group[] = [
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

  getGroups(): Observable<Group[]> {
    return of(this.groups);
  }

  /*
  DATOS CON BACKEND
  Quitar comentario cuando exista conexión real.

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(
      `${environment.apiUrl}/groups`
    );
  }
  */
}
