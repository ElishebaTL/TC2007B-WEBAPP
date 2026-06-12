import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';

import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    RouterLink,
  ],
})
export class NotificationsPage implements OnInit {
  notifications: any[] = [];

  constructor(private teacherApi: TeacherApiService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.teacherApi.getAnnouncements().subscribe({
      next: (response) => {
        const data = response.data || response;

        this.notifications = data.map((item: any) => ({
          title: item.titulo,
          id: item.aviso_id,
          message: item.contenido,
          date: this.formatDate(item.fecha_publicacion),
          groupName: item.grupo?.nombre || 'Grupo',
          author: item.remitente
            ? `${item.remitente.nombre} ${item.remitente.apellido}`
            : 'Docente',
          type: 'message',
          read: this.isRead(item.aviso_id),
        }));
      },
      error: (error) => {
        console.error('Error al cargar notificaciones:', error);
      },
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  getReadNotifications(): number[] {
  return JSON.parse(localStorage.getItem('readNotifications') || '[]');
}
isRead(id: number): boolean {
  return this.getReadNotifications().includes(id);
}

saveRead(id: number): void {
  const readNotifications = this.getReadNotifications();

  if (!readNotifications.includes(id)) {
    readNotifications.push(id);
    localStorage.setItem('readNotifications', JSON.stringify(readNotifications));
  }
}

markAllAsRead(): void {
  this.notifications = this.notifications.map((notification) => {
    this.saveRead(notification.id);

    return {
      ...notification,
      read: true,
    };
  });
}

  get unreadCount(): number {
    return this.notifications.filter((notification) => !notification.read).length;
  }

  markAsRead(notification: any): void {
    notification.read = true;
    this.saveRead(notification.id);
  }
}
