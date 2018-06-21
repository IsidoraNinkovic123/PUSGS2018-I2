import { Component, OnInit } from '@angular/core';
import {Branch} from '../../models/branch.model'
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import {NgForm} from '@angular/forms';
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
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css'],
  providers: [BranchOperationsService] 
})
export class UpdateBranchComponent implements OnInit {
  Id: number = -1;
  branch:Branch;
  type:string;
  mapInfo: MapInfo;

  uploadFile: any;
  url: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private branchOp: BranchOperationsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.branch.Logo=JSON.parse(response);
     };


     this.branchOp.getOneBranch(this.Id)
     .subscribe(
       data => {
         debugger;
         this.branch = data;  
       },
       error => {
         console.log(error);
       })

    
  }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    this.branchOp.putMethodDemo(this.Id,this.branch)
    .subscribe(
      data => {
        alert("Branch is updated succesfully.");
        this.router.navigateByUrl('/branch/'+this.Id);
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

  placeMarker($event){
    this.branch.Latitude=$event.coords.lat
    this.branch.Longitude=$event.coords.lng
  }

}
