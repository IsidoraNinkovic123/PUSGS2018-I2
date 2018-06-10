import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RegistrationOperationsService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  private parseData(res: Response) {
    return res.json() || [];
  }

  postMethodDemo(user): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Account/Register", user);
  }

  putMethodDemo(user): Observable<any> { 
    return this.httpClient.put("http://localhost:51680/api/AppUser/PutAppUser", user);
  }


  getMethodDemo(id):Observable<any>{ 
    return this.http.get("http://localhost:51680/api/AppUser/GetAppUser")
    .map(this.parseData)
    .catch(this.handleError);
  }
  
  postChangePass(password): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Account/ChangePassword", password);
  }
}
