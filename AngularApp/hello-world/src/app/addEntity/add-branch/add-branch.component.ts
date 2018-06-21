import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import {Branch} from '../../models/branch.model'
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';
import {MapInfo} from '../../models/map-info.model'



import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';


@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
  providers: [BranchOperationsService] 
})
export class AddBranchComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  uploadFile: any;
  url: any;
  mapInfo: MapInfo;
  serviceId: number = -1;


  constructor(private addBranch: BranchOperationsService, private router: Router, private activatedRoute: ActivatedRoute,private http: Http) {
    activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.url=JSON.parse(response);
     };

     this.mapInfo = new MapInfo(45.242268, 19.842954, 
      "assets/ftn.png",
      "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
   }


  ngOnInit() {
  }

  onSubmit(branch: Branch, form: NgForm) {
    branch.ServiceId = this.serviceId;
    branch.Logo=this.url;

   this.addBranch.postMethodDemo(branch)
    .subscribe(
      data => {
        alert("Branch is added succesfully.");
        this.router.navigateByUrl('/service/'+this.serviceId);
      },
      error => {
        alert(error.error.Message);
      })

    form.reset();
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  placeMarker($event){
    this.mapInfo.centerLat=$event.coords.lat
    this.mapInfo.centerLong=$event.coords.lng
  }

  
}

