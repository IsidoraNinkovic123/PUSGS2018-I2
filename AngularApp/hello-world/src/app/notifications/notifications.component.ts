import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model'
import { NotificationOperationsService } from 'src/app/operations/notificationOperations/notification-operations.service';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NotificationOperationsService] 
})
export class NotificationsComponent implements OnInit {

  notifications:Notification[];

  constructor(private notOp: NotificationOperationsService, private userOp: RegistrationOperationsService) { }

  ngOnInit() {
    this.notOp.getMethodDemo()
    .subscribe(
      data => {
        this.notifications=data;
      },
      error => {
        console.log(error);
      })
  }

  approve(id) {
    this.notOp.approve(id)
    .subscribe(
      data => {
        this.notOp.getMethodDemo()
        .subscribe(
          data => {
            this.notifications=data;
          },
          error => {
            console.log(error);
          })
      },
      error => {
        console.log(error);
      })
    
  }

  delete(id) {
    this.notOp.disapprove(id)
    .subscribe(
      data => {
        this.notOp.getMethodDemo()
        .subscribe(
          data => {
            this.notifications=data;
          },
          error => {
            console.log(error);
          })
      },
      error => {
        console.log(error);
      })
  }

}
