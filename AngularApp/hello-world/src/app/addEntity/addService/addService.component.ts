import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-service',
  templateUrl: './addService.component.html',
  styleUrls: ['./addService.component.css'],
  providers: [ServiceOperations] 
})
export class AddServiceComponent implements OnInit {
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