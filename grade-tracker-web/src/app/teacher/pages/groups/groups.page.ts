import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { Group } from '../../../shared/models/group';
import { GroupService } from '../../services/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
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
  ]
})
export class GroupsPage implements OnInit {

  groups: Group[] = [];

  constructor(
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

}
