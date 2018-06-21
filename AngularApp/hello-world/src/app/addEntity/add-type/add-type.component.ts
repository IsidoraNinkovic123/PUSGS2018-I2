import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TypeOperationsService } from 'src/app/operations/typeOperations/type-operations.service';
import { TypeOfVehicle } from '../../models/typeOfVehicle.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css'],
  providers: [TypeOperationsService] 
})
export class AddTypeComponent implements OnInit {
  types: TypeOfVehicle[];

  constructor(private addType: TypeOperationsService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.types = [];

    this.addType.getMethodDemo()
    .subscribe(
      data => {
        this.types = data;
        debugger;
      },
      error => {
        console.log(error);
      })
  }

  onSubmit(type: TypeOfVehicle, form: NgForm) {
    this.addType.postMethodDemo(type)
    .subscribe(
      data => {
        alert("Type of vehicle is added succesfully.");
        this.types.push(data);
        debugger;
      },
      error => {
        alert(error.error.Message);
      })

    form.reset();
  }

  delete(t)
  {
    debugger;
    this.addType.deleteMethodDemo(t)
    .subscribe(
      data => {
        this.types.splice(this.types.indexOf(t),1);
      },
      error => {
        alert(error.error.Message);
      })
  }

  update(t)
  {
    this.addType.putMethodDemo(t.Id,t)
    .subscribe(
      data => {
        
      },
      error => {
        alert(error.error.Message);
      })
  }

}
