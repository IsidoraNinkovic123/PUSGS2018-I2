import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrls: ['./show-branches.component.css']
})
export class ShowBranchesComponent implements OnInit {

  Id: number = -1;
  branches:Branch[];
  pageNum:number;
  
  constructor(private addService: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {

      this.addService.getServiceBranches(this.Id,1,5)
      .subscribe(
        data => {
          this.branches = data;
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
    this.addService.getServiceBranches(this.Id,this.pageNum,5)
    .subscribe(
      data => {
        this.branches = data;
        debugger;
      },
      error => {
        console.log(error);
      })

  }

}
