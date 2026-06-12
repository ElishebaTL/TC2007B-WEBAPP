import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherApiService {
  private apiUrl = 'https://localhost:3443/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getAssignments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/web/docente/asignaciones`, {
      headers: this.getHeaders(),
    });
  }

  getStudentsByGroup(groupId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/web/docente/grupos/${groupId}/alumnos`, {
      headers: this.getHeaders(),
    });
  }

  getGradeTable(asignacionId: number, periodo: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/web/docente/asignaciones/${asignacionId}/calificaciones`,
      {
        headers: this.getHeaders(),
        params: { periodo },
      }
    );
  }

  saveGradesBulk(payload: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/web/docente/calificaciones/bulk`,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }
}
