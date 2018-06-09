import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginOperationsService } from 'src/app/operations/logInOperations/login-operations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private loginSevice: LoginOperationsService,private httpClient: HttpClient) { }

  ngOnInit() {
  }

  /*onSubmit(service: Service, form: NgForm) {
    this.loginSevice.postMethodDemo(service)
    .subscribe(
      data => {
        alert("Service is added succesfully.");
      },
      error => {
        console.log(error);
      })

    form.reset();
  }*/

}
