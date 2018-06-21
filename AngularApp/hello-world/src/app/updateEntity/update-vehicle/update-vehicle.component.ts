import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Vehicle} from '../../models/vehicle.model'
import { VehicleOperationsService } from 'src/app/operations/vehicleOperations/vehicle-operations.service'
import {Router,ActivatedRoute} from '@angular/router';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import { TypeOfVehicle } from '../../models/typeOfVehicle.model';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';


@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css'],
  providers: [VehicleOperationsService] 
})
export class UpdateVehicleComponent implements OnInit {

  uploadFile: any;
  url: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  vehicle: Vehicle;
  Id: number;
  types: TypeOfVehicle[];

  constructor(private updateVehicle: VehicleOperationsService,private typeOperations: TypeOperationsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.vehicle.ImgArray.push(JSON.parse(response));
     };
  }

  ngOnInit() {
    this.updateVehicle.getOneVehicle(this.Id)

    .subscribe(
      data => {
        this.vehicle = data; 

        this.vehicle.ImgArray=this.vehicle.Images.split(";");
      },
      error => {
        console.log(error);
      })

      this.typeOperations.getMethodDemo()
      .subscribe(
        data => {
          this.types = data;       
        },
        error => {
          console.log(error);
        })
  }

  onSubmit(form: NgForm) {
    this.vehicle.Images="";
    for(var i=0;i<this.vehicle.ImgArray.length;i++){
      this.vehicle.Images+=this.vehicle.ImgArray[i]+";";
    }
    this.vehicle.Images = this.vehicle.Images.substring(0,this.vehicle.Images.length-1);

    this.updateVehicle.putMethodDemo(this.Id,this.vehicle)
    .subscribe(
      data => {
        alert("Vehicle is updated succesfully.");
        this.router.navigateByUrl('/branch/'+this.vehicle.BranchId);
      },
      error => {
        alert(error.error.Message);
      })

  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  deleteImage(idx): void {
       this.vehicle.ImgArray.splice(idx, 1);
  }

}



