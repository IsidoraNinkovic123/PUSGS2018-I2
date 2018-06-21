import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service.model'
import {Vehicle} from '../../models/vehicle.model'
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import{VehicleOperationsService} from 'src/app/operations/vehicleOperations/vehicle-operations.service';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';
import { MapInfo } from '../../models/map-info.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-one-branch',
  templateUrl: './one-branch.component.html',
  styleUrls: ['./one-branch.component.css'],
 
})
export class OneBranchComponent implements OnInit {
  Id: number = -1;
  branch:Branch;
  service:Service;
  vehicles:Vehicle[];
  type:string;
  pageNum:number;
  mapInfo: MapInfo;
  activated:boolean;
  UserId:number;
  
  constructor(private branchOp: BranchOperationsService, private regOp: RegistrationOperationsService, private serviceOp: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute,private vehicleOp: VehicleOperationsService) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {
    this.regOp.getMethodDemo()
    .subscribe(
      data => {
        this.UserId=data.Id;
      },
        error => {
          console.log(error);
        })

    this.regOp.isApproved()
    .subscribe(
      data => {
        debugger;
       this.activated=data.Activated;
      })

     

    this.branchOp.getOneBranch(this.Id)
    .subscribe(
      data => {
        this.branch = data; 
        this.branch.MapInfo=new MapInfo(this.branch.Latitude,this.branch.Longitude,this.branch.Logo,this.branch.Address,"","");
        this.serviceOp.getOneService(this.branch.ServiceId)
        .subscribe(
          data => {
            this.service = data; 
          },
          error => {
            console.log(error);
          })
      },
      error => {
        console.log(error);
      })

      this.branchOp.getBranchVehicles(this.Id,1,5)
      .subscribe(
        data => {
          this.vehicles = data;
          
          for(var i=0;i<this.vehicles.length;i++){
            this.vehicles[i].ImgArray=this.vehicles[i].Images.split(";");
          }
        },
        error => {
          console.log(error);
        })
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }

  public showMA(): boolean {
    return  localStorage.role == 'Admin';
  }

  public showM(): boolean {
    return  localStorage.role == 'Moderator';
  }

  public isActivated(): boolean {
   return this.activated;
  }

  delete(Id)
  {
    this.branchOp.deleteMethodDemo(Id)
    .subscribe(
      data => {
        this.router.navigateByUrl('/service/'+this.service.Id);
      },
      error => {
        console.log(error);
        alert(error.error.Message);
      })
  }
  
  deleteVehicle(v)
  {
    this.vehicleOp.deleteMethodDemo(v.Id)
    .subscribe(
      data => {
        this.vehicles.splice(this.vehicles.indexOf(v),1);     
      },
      error => {
        console.log(error);
        alert(error.error.Message);
      })
  }

  pagination(num)
  {
    this.pageNum=num;
    this.branchOp.getBranchVehicles(this.branch.Id,this.pageNum,5)
    .subscribe(
      data => {
        this.vehicles = data;
        for(var i=0;i<this.vehicles.length;i++){
          this.vehicles[i].ImgArray=this.vehicles[i].Images.split(";");
        }
      },
      error => {
        console.log(error);
      })

  }

  unavailableV(vehicle)
  {
    vehicle.Unavailable=true;
    this.vehicleOp.putMethodDemo(vehicle.Id,vehicle)
    .subscribe(
      data => {
      },
      error => {
        alert(error.error.Message);
      })
  }

}
