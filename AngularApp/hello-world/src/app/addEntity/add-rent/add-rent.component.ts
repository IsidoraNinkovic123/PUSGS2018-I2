import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentOperationsService } from 'src/app/operations/rentOperations/rent-operations.service';
import {RegistrationOperationsService} from  'src/app/operations/registrationOperations/registration-operations.service';
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { Rent } from '../../models/rent.model';
import { User } from '../../models/user.model';
import { Branch } from '../../models/branch.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css'],
  providers: [RentOperationsService] 
})
export class AddRentComponent implements OnInit {

  vehicleId:number;
  serviceId:number;
  user:User;
  branches:Branch[];

  constructor(private addRent: RentOperationsService,private serviceOp: ServiceOperations,private registerOp: RegistrationOperationsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.vehicleId = params["vehicleId"], this.serviceId = params["serviceId"]});
  }

  ngOnInit() {

    this.registerOp.getMethodDemo()
    .subscribe(
      data => {
       this.user=data;
      },
      error => {
        console.log(error);
      })

      this.serviceOp.getServiceBranchesNoPag(this.serviceId)
      .subscribe(
        data => {
          this.branches = data;   
          debugger;        
        },
        error => {
          console.log(error);
        })

  }

  onSubmit(rent: Rent, form: NgForm) {
    rent.VehicleId = this.vehicleId;
    rent.UserId = this.user.Id;

   this.addRent.postMethodDemo(rent)
    .subscribe(
      data => {
        alert(data);
      },
      error => {
        debugger;
        alert(error.error.Message);
      })

    form.reset();
  }

}
