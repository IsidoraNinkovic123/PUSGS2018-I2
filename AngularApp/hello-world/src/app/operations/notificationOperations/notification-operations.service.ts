import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NotificationOperationsService {

  constructor(private http: Http,private httpClient: HttpClient) { }
  
    private handleError(error: Response | any) {
      let errorMessage: string;
      errorMessage = error.message ? error.message : error.toString();
      return Observable.throw(errorMessage);
    }
  
    private parseData(res: Response) {
      return res.json() || [];
    }
  
    deleteMethodDemo(id): Observable<any> {  
      return this.http.delete("http://localhost:51680/api/Notify/"+id)
     
    }
  
    getMethodDemo():Observable<any>{ 
      return this.httpClient.get("http://localhost:51680/api/Notify");
    }
    approve(id):Observable<any>{ 
      return this.httpClient.post("http://localhost:51680/api/Notify/Approve?id="+id+"&approved="+true,"");
    }
    disapprove(id):Observable<any>{ 
      return this.httpClient.post("http://localhost:51680/api/Notify/Approve?id="+id+"&approved="+false,"");
    }
}
