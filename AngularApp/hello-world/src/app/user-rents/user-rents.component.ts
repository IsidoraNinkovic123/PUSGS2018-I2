import { Component, OnInit } from '@angular/core';
import {Rent} from '../models/rent.model'
import { RentOperationsService } from 'src/app/operations/rentOperations/rent-operations.service';


@Component({
  selector: 'app-user-rents',
  templateUrl: './user-rents.component.html',
  styleUrls: ['./user-rents.component.css']
})
export class UserRentsComponent implements OnInit {

  rents:Rent[];

  constructor(private rentOp: RentOperationsService) { }

  ngOnInit() {
    this.rentOp.getMethodDemo()
    .subscribe(
      data => {
        this.rents = data;
        debugger; 
      },
      error => {
        console.log(error);
      })
  }

  update(rent)
  {
    debugger;
    this.rentOp.putMethodDemo(rent.Id,rent)
    .subscribe(
      data => {
        this.rentOp.getMethodDemo()
        .subscribe(
          data => {
            this.rents = data;
            debugger; 
          },
          error => {
            console.log(error);
          })
    
      },
      error => {
        alert(error.error.Message);
      })

  }

  delete(id)
  {
    debugger;
    this.rentOp.deleteMethodDemo(id)
    .subscribe(
      data => {
        this.rentOp.getMethodDemo()
        .subscribe(
          data => {
            this.rents = data;
            debugger; 
          },
          error => {
            console.log(error);
          })
     
      },
      error => {
        alert(error.error.Message);
      })
  }

}
