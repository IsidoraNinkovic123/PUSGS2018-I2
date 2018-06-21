import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginOperationsService } from 'src/app/operations/logInOperations/login-operations.service';
import {LogIn} from '../models/login.model'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private loginSevice: LoginOperationsService) { }

  ngOnInit() {
  }

  onSubmit(login: LogIn,form: NgForm) {
    this.loginSevice.getTheToken(login.Email,login.Password);
  }

}
