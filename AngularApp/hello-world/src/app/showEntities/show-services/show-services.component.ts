import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.css'],
  providers: [ServiceOperations] 
})
export class ShowServicesComponent implements OnInit {

  pageNum:number;
  services: Service[]
  constructor(private addService: ServiceOperations) { }

  ngOnInit() {
    this.services = [];

    this.addService.getPagination(1,5)
    .subscribe(
      data => {
        this.services = data;
        debugger;
      },
      error => {
        console.log(error);
      })
  }

  public showMA(): boolean {
    return localStorage.role == 'Manager' || localStorage.role == 'Admin';
  }
  
  pagination(num)
  {
    this.pageNum=num;
    debugger;
    this.addService.getPagination(this.pageNum,5)
    .subscribe(
      data => {
        this.services = data;
        debugger;
      },
      error => {
        console.log(error);
      })

  }

}
