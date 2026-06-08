import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
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
export class GroupDetailPage implements OnInit {
  groupId!: number;
  group?: Group;
  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.groupId = Number(this.route.snapshot.paramMap.get('id'));

    this.groupService.getGroups().subscribe((groups) => {
      this.group = groups.find((group) => group.id === this.groupId);
    });

    this.studentService.getStudents().subscribe((students) => {
      this.students = students.filter(
        (student) => student.groupId === this.groupId
      );
    });
  }
}
