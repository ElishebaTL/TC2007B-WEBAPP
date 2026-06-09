import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonButton,
  ],
})
export class NotificationsPage {
  notifications = [
    {
      title: 'Boletas pendientes de revisión',
      message: 'El grupo 5to A tiene 3 boletas pendientes de firma.',
      date: '15 de mayo, 2026',
      type: 'warning',
      read: false,
    },
    {
      title: 'Nuevo comentario recibido',
      message: 'Un padre de familia envió una duda sobre la calificación de Español.',
      date: '14 de mayo, 2026',
      type: 'message',
      read: false,
    },
    {
      title: 'Calificaciones guardadas',
      message: 'Las calificaciones del Segundo Trimestre fueron registradas correctamente.',
      date: '13 de mayo, 2026',
      type: 'success',
      read: true,
    },
  ];

  markAllAsRead(): void {
    this.notifications = this.notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
  }

  get unreadCount(): number {
    return this.notifications.filter((notification) => !notification.read).length;
  }

  markAsRead(notification: any): void {
  notification.read = true;
}
}
