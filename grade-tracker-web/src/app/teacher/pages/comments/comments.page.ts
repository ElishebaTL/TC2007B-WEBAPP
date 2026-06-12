import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { TeacherApiService } from '../../../core/services/teacher-api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonButton, IonInput],
})
export class CommentsPage implements OnInit {
  conversations: any[] = [];
  selectedConversation: number | null = null;
  currentConversation: any = null;
  newMessage = '';

  constructor(private teacherApi: TeacherApiService) {}

  ngOnInit(): void {
    this.loadChats();
  }

  loadChats(): void {
    this.teacherApi.getChats().subscribe({
      next: (response) => {
        const data = response.data || response;

        this.conversations = data.map((chat: any) => ({
          id: chat.chat_id,
          parent: `${chat.tutor.nombre} ${chat.tutor.apellido}`,
          student: `${chat.alumno.nombre} ${chat.alumno.apellido}`,
          group: 'Chat',
          lastMessage: chat.ultimo_mensaje,
          unread: chat.no_leidos > 0,
          messages: [],
        }));

        if (this.conversations.length > 0) {
          this.selectConversation(this.conversations[0].id);
        }
      },
      error: (error) => {
        console.error('Error al cargar chats:', error);
      },
    });
  }

  selectConversation(id: number): void {
    this.selectedConversation = id;
    this.currentConversation = this.conversations.find((c) => c.id === id);

    this.teacherApi.getChatMessages(id).subscribe({
      next: (response) => {
        const data = response.data || response;

        this.currentConversation.messages = data
          .slice()
          .reverse()
          .map((message: any) => ({
            text: message.contenido,
            time: this.formatDate(message.fecha_envio),
            sender: message.remitente_id === 1 ? 'teacher' : 'parent',
          }));

        this.currentConversation.unread = false;
      },
      error: (error) => {
        console.error('Error al cargar mensajes:', error);
      },
    });
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.selectedConversation) return;

    this.teacherApi
      .sendChatMessage(this.selectedConversation, this.newMessage)
      .subscribe({
        next: () => {
          this.newMessage = '';
          this.selectConversation(this.selectedConversation!);
        },
        error: (error) => {
          console.error('Error al enviar mensaje:', error);
          alert('No se pudo enviar el mensaje.');
        },
      });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('es-MX', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
