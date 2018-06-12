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

  services: Service[]
  constructor(private addService: ServiceOperations) { }

  ngOnInit() {
    this.services = [];

    this.addService.getMethodDemo()
    .subscribe(
      data => {
        this.services = data;
        
      },
      error => {
        console.log(error);
      })
  }

  //DODATI IZNAD ADD DUGMETA *ngIf="showAddNew()"
  public showAddNew(): boolean {
    return localStorage.role == 'Manager';
  }

}
