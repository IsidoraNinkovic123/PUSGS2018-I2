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
  
  constructor(private addService: ServiceOperations,private router: Router, private activatedRoute: ActivatedRoute) {
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

    this.service=new Service("Servis","","service@yahoo.com","desc");
    
    this.service.Branches=[];
    this.service.Branches.push(new Branch("","address",1,1));
    this.service.Branches.push(new Branch("","address",1,1));
    this.service.Branches.push(new Branch("","address",1,1));
    this.service.Branches.push(new Branch("","address",1,1));
  }

}
