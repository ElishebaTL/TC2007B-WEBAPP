import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonInput, IonButton],
})
export class CommentsPage {
  selectedConversation = 1;
  newMessage = '';

  conversations = [
    {
      id: 1,
      parent: 'Héctor Jaramillo Sánchez',
      student: 'Emiliano Jaramillo Barón',
      group: '5to A',
      unread: true,
      messages: [
        {
          sender: 'parent',
          text: 'Buenas tardes, profesora. ¿Cómo puedo apoyar a Emiliano para mejorar en lectura?',
          time: '14 mayo 2026, 10:30',
        },
        {
          sender: 'teacher',
          text: 'Buenas tardes. Recomiendo practicar lectura 15 minutos diarios y revisar comprensión con preguntas simples.',
          time: '14 mayo 2026, 12:15',
        },
      ],
    },
    {
      id: 2,
      parent: 'José Martínez Cruz',
      student: 'José Luis Martínez',
      group: '5to B',
      unread: true,
      messages: [
        {
          sender: 'parent',
          text: '¿Podrían enviarnos material de apoyo para practicar en casa?',
          time: '12 mayo 2026, 09:40',
        },
      ],
    },
  ];

  get currentConversation() {
    return this.conversations.find(
      (conversation) => conversation.id === this.selectedConversation
    );
  }

  selectConversation(id: number): void {
    this.selectedConversation = id;

    const conversation = this.conversations.find((item) => item.id === id);
    if (conversation) {
      conversation.unread = false;
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.currentConversation) {
      return;
    }

    this.currentConversation.messages.push({
      sender: 'teacher',
      text: this.newMessage,
      time: 'Ahora',
    });

    this.newMessage = '';
  }
}
