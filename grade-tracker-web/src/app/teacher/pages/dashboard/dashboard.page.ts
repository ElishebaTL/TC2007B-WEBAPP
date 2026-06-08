import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';

import { Group } from '../../../shared/models/group';
import { Student } from '../../../shared/models/student';
import { GroupService } from '../../services/group';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  ],
})
export class DashboardPage implements OnInit {
  teacherName = 'Profa. Laura González';
  subject = 'Español';

  groups: Group[] = [];
  students: Student[] = [];

  pendingComments = 2;

  constructor(
    private groupService: GroupService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });

    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  get totalStudents(): number {
    return this.students.length;
  }

  get totalPendingReportCards(): number {
    return this.groups.reduce(
      (total, group) => total + group.pendingReportCards,
      0
    );
  }
}
