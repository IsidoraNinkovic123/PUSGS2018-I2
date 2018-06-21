import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BranchOperationsService {

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
    return this.httpClient.get('http://localhost:51680/api/Branches');
  }

  getOneBranch(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Branches/GetBranch?id='+ id);
  }

  getBranchVehicles(id,pageIndex,pageSize): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Vehicles?brId='+ id+'&pageIndex='+pageIndex+"&pageSize="+pageSize);
  }

  postMethodDemo(branch): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Branches/PostBranch", branch);
  }
 
  putMethodDemo(id,branch): Observable<any> {  
    return this.httpClient.put("http://localhost:51680/api/Branches/"+id, branch);
  }

  deleteMethodDemo(id): Observable<any> {  
    return this.httpClient.delete("http://localhost:51680/api/Branches/"+id)
   
  }

}
