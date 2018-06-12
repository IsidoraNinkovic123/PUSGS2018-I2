import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.css']
})
export class OneServiceComponent implements OnInit {
  Id: number = -1;
  service:Service;
  branches:Branch[];
  
  constructor(private addService: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {
    this.addService.getOneService(this.Id)
    .subscribe(
      data => {
        this.service = data; 
      },
      error => {
        console.log(error);
      })

      this.addService.getServiceBranches(this.Id)
      .subscribe(
        data => {
          this.branches = data; 
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
