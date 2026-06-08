import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
  ],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    console.log('DATOS MOCK - login docente:', {
      email: this.email,
      password: this.password,
    });

    this.router.navigate(['/dashboard']);
  }
}
