import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from 'src/app/models/user.model';


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

  putMethodDemo(id,user): Observable<any> { 
    return this.httpClient.put("http://localhost:51680/api/AppUsers/"+id, user);
  }

  getMethodDemo():Observable<any>{ 
    return this.httpClient.get("http://localhost:51680/api/ActiveUser");
  }
  
  postChangePass(password): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Account/ChangePassword", password);
  }

  approveUser(email):Observable<any>
  {
    return this.httpClient.post("http://localhost:51680/api/Notify/NotifyAdmins?email="+email,"");
  }

  isApproved():Observable<any>
  {
    return this.httpClient.get("http://localhost:51680/api/ActiveUser/IsActivated");
  }

  
}
