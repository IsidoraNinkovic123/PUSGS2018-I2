import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { User } from '../models/user.model';
import { Password } from '../models/password.model';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isVisible = false;
  user:User;
  id:number;
  
  uploadFile: any;
  url: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private addUser: RegistrationOperationsService) {    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.url=JSON.parse(response);
     };
    }

  ngOnInit() {
    this.addUser.getMethodDemo()
    .subscribe(
      data => {
        debugger;
        this.user = data;    
      },
      error => {
        console.log(error);
      })
    }


  onSubmit(form: NgForm) {
    var imageExisted:boolean=false;
    if(this.user.PersonalDocument){
      imageExisted=true;
    }

    if(this.url){
      this.user.PersonalDocument=this.url;
    }
    
    this.addUser.putMethodDemo(this.user.Id, this.user)
    .subscribe(
      data => {
        alert("User is updated succesfully.");

        if(this.url && !imageExisted){
          this.addUser.approveUser(this.user.Email)
          .subscribe(
            data => {
              alert("Notification sent");
            },
            error => {
              console.log(error);
            })
        }
      },
      error => {
        alert(error.error.Message);
      })
  }

  onSubmitPass(password: Password, form: NgForm) {
    this.addUser.postChangePass(password)
    .subscribe(
      data => {
        alert("Password is changed succesfully.");
      },
      error => {
        alert(error.error.Message);
      })
  }
  
  toggle():void {
    this.isVisible = !this.isVisible;
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

}
