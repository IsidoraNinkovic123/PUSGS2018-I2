import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { VehicleOperationsService } from 'src/app/operations/vehicleOperations/vehicle-operations.service';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../models/vehicle.model';
import { TypeOfVehicle } from '../../models/typeOfVehicle.model';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  providers: [VehicleOperationsService, TypeOperationsService],
})
export class AddVehicleComponent implements OnInit {

  constructor(private addVehicle: VehicleOperationsService, private typeOperations: TypeOperationsService, private httpClient: HttpClient) { }

  type: TypeOfVehicle;
  types: TypeOfVehicle[];

  ngOnInit() {
    this.typeOperations.getMethodDemo()
    .subscribe(
      data => {
        this.types = data;       
      },
      error => {
        console.log(error);
      })
  }

  onSubmit(vehicle: Vehicle, form: NgForm) {
    vehicle.Type = this.type;
    this.addVehicle.postMethodDemo(vehicle)
    .subscribe(
      data => {
        alert("Vehicle is added succesfully.");
      },
      error => {
        console.log(error);
      })

    form.reset();
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.addVehicle.postLogo(formData,options)
    .subscribe(
      data => {
       
      },
      error => {
        console.log(error);
      })   
    }
  }

  selectItem(value){
     this.type = value;
   }

}
