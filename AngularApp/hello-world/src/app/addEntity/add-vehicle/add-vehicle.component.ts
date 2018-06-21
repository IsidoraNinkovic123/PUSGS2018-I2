import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { VehicleOperationsService } from 'src/app/operations/vehicleOperations/vehicle-operations.service';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { Vehicle } from '../../models/vehicle.model';
import { TypeOfVehicle } from '../../models/typeOfVehicle.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';


import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload//PostImage'; 


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  providers: [VehicleOperationsService, TypeOperationsService],
})
export class AddVehicleComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  url: string[];
  uploadFile: any;

  branchId: number = -1;
  types: TypeOfVehicle[];


  constructor(private addVehicle: VehicleOperationsService, private typeOperations: TypeOperationsService,private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.branchId = params["Id"]});
    this.url=[];

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.url.push(JSON.parse(response));
         debugger;
     };
   }


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
    vehicle.ImgArray=this.url;
    vehicle.Unavailable=false;
    debugger;
    
    vehicle.Images="";
    for(var i=0;i<vehicle.ImgArray.length;i++){
      vehicle.Images+=vehicle.ImgArray[i]+";";
    }

    vehicle.BranchId=this.branchId;

    debugger;
    this.addVehicle.postMethodDemo(vehicle)
    .subscribe(
      data => {
        alert("Vehicle is added succesfully.");
        this.router.navigateByUrl('/branch/'+this.branchId);
      },
      error => {
        alert(error.error.Message);
      })

    form.reset();
  }

  handleUpload(data): void {
    debugger;
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }


}
