import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grade-capture',
  templateUrl: './grade-capture.page.html',
  styleUrls: ['./grade-capture.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GradeCapturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
