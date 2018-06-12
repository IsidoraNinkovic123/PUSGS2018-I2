import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-one-branch',
  templateUrl: './one-branch.component.html',
  styleUrls: ['./one-branch.component.css']
})
export class OneBranchComponent implements OnInit {
  Id: number = -1;
  branch:Branch;
  service:string;
  
  constructor(private branchOp: BranchOperationsService, private serviceOp: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {
    this.branchOp.getOneBranch(this.Id)
    .subscribe(
      data => {
        this.branch = data; 
      },
      error => {
        console.log(error);
      })

    this.serviceOp.getOneService(this.branch.ServiceId)
    .subscribe(
      data => {
        this.service = data.Name; 
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
