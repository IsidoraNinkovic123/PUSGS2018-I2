import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {Router,ActivatedRoute} from '@angular/router';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';


@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css'],
  providers: [ServiceOperations] 
})
export class UpdateServiceComponent implements OnInit {

  uploadFile: any;
  url: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  service: Service;
  Id: number;

  constructor(private updateService: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.service.Logo=JSON.parse(response);
     };
   }

  ngOnInit() {
    this.updateService.getOneService(this.Id)
    .subscribe(
      data => {
        this.service = data; 
      },
      error => {
        console.log(error);
      })
  }

  
  onSubmit(form: NgForm) {
    this.updateService.putMethodDemo(this.Id,this.service)
    .subscribe(
      data => {
        alert("Service is updated succesfully.");
        this.router.navigateByUrl('/service/'+this.Id);
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

}
