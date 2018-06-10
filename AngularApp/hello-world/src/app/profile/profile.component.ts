import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Password } from '../models/password.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isVisible = false;
  user:User;
  id:number;

  constructor(private addUser: RegistrationOperationsService, private httpClient: HttpClient) {    }

  ngOnInit() {
    this.addUser.getMethodDemo(this.id)
    .subscribe(
      data => {
        this.user = data;        
      },
      error => {
        console.log(error);
      })
 
      this.user=new User("Ivona","Ivona@yahoo.com",new Date(2018,2,1),"slika","pass","pass");
    }

  onSubmit(user: User, form: NgForm) {
    this.addUser.putMethodDemo(user)
    .subscribe(
      data => {
        alert("User is updated succesfully.");
      },
      error => {
        console.log(error);
      })
  }

  onSubmitPass(password: Password, form: NgForm) {
    this.addUser.postChangePass(password)
    .subscribe(
      data => {
        alert("Password is changed succesfully.");
      },
      error => {
        console.log(error);
      })
  }
  
  toggle():void {
    this.isVisible = !this.isVisible;
  }

}
