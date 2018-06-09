import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.css'],
  providers: [ServiceOperations] 
})
export class ShowServicesComponent implements OnInit {

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
      this.services = [];
      this.services.push(new Service("a","C:\Users\tejoo\Desktop\pepsi.png","a@hotmail.com","aaa"));
  }

}
