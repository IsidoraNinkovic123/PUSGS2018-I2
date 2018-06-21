import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { User } from '../../models/user.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:51680/api/Upload/PostImage';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationOperationsService] 
})
export class RegistrationComponent implements OnInit {
 
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  uploadFile: any;
  url: any;

  constructor(private addUser: RegistrationOperationsService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.url=JSON.parse(response);
     };
   }

  ngOnInit() {
  }


  onSubmit(user: User, form: NgForm) {
    if(this.url){
      user.PersonalDocument=this.url;
    }

    this.addUser.postMethodDemo(user)
    .subscribe(
      data => {
        alert("User is registrated succesfully.");
        if(this.url){
          this.addUser.approveUser(user.Email)
          .subscribe(
            data => {
              alert("Notification sent");
            },
            error => {
              console.log(error);
            })
        }
        this.router.navigateByUrl('/logIn');
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
