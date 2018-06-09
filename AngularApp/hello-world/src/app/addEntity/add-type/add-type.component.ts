import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import { HttpClient } from '@angular/common/http';
import { TypeOfVehicle } from '../../models/typeOfVehicle.model';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css'],
  providers: [TypeOperationsService] 
})
export class AddTypeComponent implements OnInit {

  constructor(private addType: TypeOperationsService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(type: TypeOfVehicle, form: NgForm) {
    this.addType.postMethodDemo(type)
    .subscribe(
      data => {
        alert("Type of vehicle is added succesfully.");
      },
      error => {
        console.log(error);
      })

    form.reset();
  }

}
