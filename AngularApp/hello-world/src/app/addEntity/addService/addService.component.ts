import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Service} from '../../models/service.model'
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import {Router} from '@angular/router';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';


@Component({
  selector: 'app-add-service',
  templateUrl: './addService.component.html',
  styleUrls: ['./addService.component.css'],
  providers: [ServiceOperations] 
})
export class AddServiceComponent implements OnInit {

  uploadFile: any;
  url: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private addService: ServiceOperations, private router: Router) {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.url=JSON.parse(response);
     };
   }

  ngOnInit() {
  }

  
  onSubmit(service: Service, form: NgForm) {
    service.Logo=this.url;

    this.addService.postMethodDemo(service)
    .subscribe(
      data => {
        alert("Service is added succesfully.");
        this.addService.approveService(data.Id,service.Name)
        .subscribe(
          data => {
              alert("Notification sent");
          },
          error => {
            console.log(error);
          })
        this.router.navigateByUrl('/home');
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

}
