import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Service} from '../models/service.model'
import { ServiceOperations } from 'src/app/addService/ServiceOperations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [ServiceOperations] 
})
export class ServiceComponent implements OnInit {
  services: Service[]
  constructor(private addService: ServiceOperations,private httpClient: HttpClient) { }

  ngOnInit() {
    this.addService.getMethodDemo()
    .subscribe(
      data => {
        this.services = data;
        
      },
      error => {
        console.log(error);
      })
  }

  

  onSubmit(service: Service, form: NgForm) {
    this.addService.postMethodDemo(service)
    .subscribe(
      data => {
        alert("Service is added succesfully.");
      },
      error => {
        console.log(error);
      })

    form.reset();

    
  }

}
