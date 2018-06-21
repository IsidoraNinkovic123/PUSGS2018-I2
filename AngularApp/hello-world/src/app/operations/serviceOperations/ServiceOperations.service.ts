import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ServiceOperations {

  constructor(private http: Http,private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getMethodDemo(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services');
  }

  getOneService(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services/GetService?id='+ id);
  }
  
  postMethodDemo(service): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Services/PostService", service);
  }
  
  getServiceBranches(id,pageIndex,pageSize): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Branches?serviceId='+id+'&pageIndex='+pageIndex+"&pageSize="+pageSize);
  }

  getServiceBranchesNoPag(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Branches?serviceId='+id);
  }

  putMethodDemo(id,service): Observable<any> {  
    return this.httpClient.put("http://localhost:51680/api/Services/"+id, service);
  }

  deleteMethodDemo(id): Observable<any> {  
    return this.httpClient.delete("http://localhost:51680/api/Services/"+id)
  
  }

  getPagination(pageIndex,pageSize): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services?pageIndex='+pageIndex+"&pageSize="+pageSize);
  }

  approveService(id, name):Observable<any>
  {
    return this.httpClient.post("http://localhost:51680/api/Notify/NotifyAdmins?serviceName="+name+"&id="+id,"");
  }
  getMediumGrade(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services?ServiceGradeid='+id);
  }
}
