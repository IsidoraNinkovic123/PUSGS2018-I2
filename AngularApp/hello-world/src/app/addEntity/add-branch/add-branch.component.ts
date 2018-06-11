import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BranchOperationsService } from 'src/app/operations/branchOperations/branch-operations.service';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import {Branch} from '../../models/branch.model'
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
  providers: [BranchOperationsService] 
})
export class AddBranchComponent implements OnInit {

  serviceId: number = -1;
  constructor(private addBranch: BranchOperationsService,private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});
   }

  ngOnInit() {
  }

  onSubmit(branch: Branch, form: NgForm) {
    branch.ServiceId = this.serviceId;

    this.addBranch.postMethodDemo(branch)
    .subscribe(
      data => {
        alert("Branch is added succesfully.");
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
        this.addBranch.postLogo(formData,options)
    .subscribe(
      data => {
       
      },
      error => {
        console.log(error);
      })
        
    }
  }
}
