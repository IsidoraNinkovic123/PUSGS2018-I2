import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/comment.model';
import {Service} from '../../models/service.model'
import {Grade} from '../../models/grade.model'
import { CommentOperationsService } from 'src/app/operations/commentOperations/comment-operations.service';
import { RegistrationOperationsService } from 'src/app/operations/registrationOperations/registration-operations.service';
import { ServiceOperations } from 'src/app/operations/serviceOperations/ServiceOperations.service';
import { GradeOperationsService } from 'src/app/operations/gradeOperations/grade-operations.service'
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { RegistrationComponent } from 'src/app/addEntity/registration/registration.component';
import { Branch } from '../../models/branch.model';
import { MapInfo } from '../../models/map-info.model';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.css']
})
export class OneServiceComponent implements OnInit {
  Id: number = -1;
  comments:Comment[];
  pageNum:number;
  newComm:Comment;
  service:Service;
  UserId:number;
  isOn:boolean[] = [false,false,false,false,false];
  grade:number;
  Grade:Grade;
  branches:Branch[];
  Average:number=0;

  
  constructor(private commOp: CommentOperationsService, private userOp: RegistrationOperationsService,private gradeOp: GradeOperationsService, private serOp: ServiceOperations, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {


    this.serOp.getServiceBranchesNoPag(this.Id)
    .subscribe(
      data => {
        this.branches = data;
        for(var i=0;i<this.branches.length;i++)
        {
          this.branches[i].MapInfo=new MapInfo( this.branches[i].Latitude, this.branches[i].Longitude, this.branches[i].Logo, this.branches[i].Address,"","");
        }
      },
      error => {
        console.log(error);
      })


      this.serOp.getMediumGrade(this.Id)
      .subscribe(
        data => {
          this.Average= data;
        },
        error => {
          console.log(error);
        })

    if(localStorage.jwt)
    {
      this.userOp.getMethodDemo()
      .subscribe(
        data => {
          this.newComm.AppUser=data; 
          this.newComm.AppUserId=0; 
          this.UserId=this.newComm.AppUser.Id; 
          this.newComm.ServiceId = this.Id;
  
          
          this.gradeOp.getServiceGrades(this.UserId,this.Id)
          .subscribe(
            data => {
              this.grade=data;
              for(var i=0;i<this.grade;i++){
                this.isOn[i]=true;
              }           
            },
            error => {
              console.log(error);
            })
        },
        error => {
          console.log(error);
        })
    }


    this.serOp.getOneService(this.Id)
    .subscribe(
      data => {
        this.service = data; 
      },
      error => {
        console.log(error);
      })

    this.commOp.getServiceComments(this.Id,1,5)
    .subscribe(
      data => {
        this.comments = data; 
      },
      error => {
        console.log(error);
      })

      this.newComm=new Comment();
    }


    showBranch(Id)
    {
      debugger;
      this.router.navigateByUrl('/branch/'+Id);
    }
    
    public showMA(): boolean {
      return localStorage.role == 'Admin';
    }

    public showM(): boolean {
      return localStorage.role == 'Manager';
    }

  pagination(num)
  {
    this.pageNum=num;
    this.commOp.getServiceComments(this.Id,this.pageNum,5)
    .subscribe(
      data => {
        this.comments = data; 
      },
      error => {
        console.log(error);
      })
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }

  deleteComm(id)
  {
    this.commOp.deleteMethodDemo(id)
    .subscribe(
      data => {
        if((data%5)==0){
          this.pagination((data/5));
        }else{
          this.pagination(Math.floor(data/5)+1);
        }     
      },
      error => {
        alert(error.error.Message);
      })
  }

  
  updateComm(comm)
  {
    this.commOp.putMethodDemo(comm.Id,comm)
    .subscribe(
      data => {

        if((data%5)==0){
          this.pagination((data/5));
        }else{
          this.pagination(Math.floor(data/5)+1);
        }      
      },
      error => {
        alert(error.error.Message);
      })
  }

  addComment()
  {  
    this.commOp.postMethodDemo(this.newComm)
    .subscribe(
      data => {
        if((data%5)==0){
          this.pagination((data/5));
        }else{
          this.pagination(Math.floor(data/5)+1);
        }
      
        this.newComm.Text="";
      },
      error => {
        alert(error.error.Message);
      }) 
  }

  delete(Id)
  {
    this.serOp.deleteMethodDemo(Id)
    .subscribe(
      data => {
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
        alert(error.error.Message);
      })
  }

  starClick(num){
    this.gradeOp.getGradesPermision(this.Id)
    .subscribe(
      data => {
         if(data)
         {
          this.gradeOp.getServiceGrades(this.UserId,this.Id)
          .subscribe(
            data => {
              this.grade=data;
      
              if( this.grade==0)
              {
                  for(var i=0;i<num;i++){
                    this.isOn[i]=true;
                  }
      
                  this.Grade=new Grade(num,0,this.Id);
      
                  this.gradeOp.postMethodDemo(this.Grade)
                  .subscribe(
                    data => {
                      this.serOp.getMediumGrade(this.Id)
                      .subscribe(
                        data => {
                          this.Average= data;
                        },
                        error => {
                          console.log(error);
                        })
                
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
      },
      error => {
        alert(error.error.Message);
      })   
  }
}
