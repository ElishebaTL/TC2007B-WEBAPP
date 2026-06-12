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

  getAnnouncements(): Observable<any> {
  return this.http.get(`${this.apiUrl}/web/docente/avisos`, {
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
  getChats(): Observable<any> {
  return this.http.get(`${this.apiUrl}/web/docente/chats`, {
    headers: this.getHeaders(),
  });
}

getChatMessages(chatId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/web/docente/chats/${chatId}/mensajes`, {
    headers: this.getHeaders(),
    params: {
      page: 1,
      limit: 20,
    },
  });
}

sendChatMessage(chatId: number, contenido: string): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/web/docente/chats/${chatId}/mensajes`,
    { contenido },
    {
      headers: this.getHeaders(),
    }
  );
}
}
