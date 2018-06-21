import {
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginOperationsService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  //log in
  getTheToken(email,password){    
        if(!localStorage.jwt)
        {
          let headers = new HttpHeaders();
          headers = headers.append('Content-type', 'application/x-www-form-urlencoded')
          
          let x = this.httpClient.post('http://localhost:51680/oauth/token','username='+email+'&password='+password+'&grant_type=password', {"headers": headers}) as Observable<any>
          x.subscribe(
            res => {
              console.log(res.access_token);
              
              let jwt = res.access_token;
    
              let jwtData = jwt.split('.')[1]
              let decodedJwtJsonData = window.atob(jwtData)
              let decodedJwtData = JSON.parse(decodedJwtJsonData)
    
              let role = decodedJwtData.role
    
              console.log('jwtData: ' + jwtData)
              console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
              console.log('decodedJwtData: ' + decodedJwtData)
              console.log('Role ' + role)
    
              localStorage.setItem('jwt', jwt)
              localStorage.setItem('role', role);

              this.router.navigateByUrl('/home');
            },
            err => {
              console.log("Error occured");
            }
          );
        }
      }

}
