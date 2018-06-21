import { Component, OnInit } from '@angular/core';
import { VehicleOperationsService } from 'src/app/operations/vehicleOperations/vehicle-operations.service';
import {NgForm} from '@angular/forms';
import { Vehicle } from '../models/vehicle.model';
import { TypeOfVehicle } from '../models/typeOfVehicle.model';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import { Branch } from '../models/branch.model';
import { Search } from '../models/search.model';
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import { Service } from '../models/service.model';
import { ServiceOperations} from 'src/app/operations/serviceOperations/ServiceOperations.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  s:string;
  vehicles:Vehicle[];
  showVehicles:Vehicle[];
  types:TypeOfVehicle[];
  branches:Branch[];
  services:Service[];
  pageNum:number;

  constructor(private addVehicle: VehicleOperationsService,private typeOperations: TypeOperationsService,private branchOperations: BranchOperationsService,private serviceOperations: ServiceOperations) { }

  ngOnInit() {
    this.typeOperations.getMethodDemo()
    .subscribe(
      data => {
        this.types = data; 
        debugger;      
      },
      error => {
        console.log(error);
      })

      this.branchOperations.getMethodDemo()
      .subscribe(
        data => {
          this.branches = data;          
        },
        error => {
          console.log(error);
        })

        
      this.serviceOperations.getMethodDemo()
      .subscribe(
        data => {
          this.services = data;          
        },
        error => {
          console.log(error);
        })
  }


  onSubmitF(search:Search,form: NgForm) {
    this.addVehicle.getFilter(search)
    .subscribe(
      data => {
       this.vehicles=data;

       for(var i=0;i<this.vehicles.length;i++){
        this.vehicles[i].ImgArray=this.vehicles[i].Images.split(";");
      }

       this.showVehicles=[];
       for(var i=0;i<5;i++)
       {
          if(i>this.vehicles.length-1)
          break;
          this.showVehicles.push(this.vehicles[i]);
       }             
      },
      error => {
        console.log(error);
      })
  }

  onSubmitS(form: NgForm) {
    this.addVehicle.getSearched(this.s)
    .subscribe(
      data => {
       this.vehicles=data;

       this.showVehicles=[];      
       for(var i=0;i<this.vehicles.length;i++){
        this.vehicles[i].ImgArray=this.vehicles[i].Images.split(";");
      }

      for(var i=0;i<5;i++)
      {
        if(i>this.vehicles.length-1)
        break;
        this.showVehicles.push(this.vehicles[i]);
      }
      },
      error => {
        console.log(error);
      })
  }

  pagination(num)
  {
    this.showVehicles=[];
    this.pageNum=num;

    for(var i=0;i<5;i++)
    {
      if(this.pageNum*5+i>this.vehicles.length-1)
      break;
      this.showVehicles.push(this.vehicles[this.pageNum*5+i]);
    }
  }


  onChange(sId){
  sId=sId.substring(3);

    debugger;
    this.serviceOperations.getServiceBranches(sId,1,5)
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
