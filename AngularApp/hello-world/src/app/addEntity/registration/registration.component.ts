import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationOperationsService] 
})
export class RegistrationComponent implements OnInit {

  constructor(private addUser: RegistrationOperationsService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(user: User, form: NgForm) {
    this.addUser.postMethodDemo(user)
    .subscribe(
      data => {
        alert("User is registrated succesfully.");
      },
      error => {
        console.log(error);
      })

    form.reset();
  }

}
