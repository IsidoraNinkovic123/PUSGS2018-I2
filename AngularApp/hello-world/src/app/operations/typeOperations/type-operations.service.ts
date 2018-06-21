import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationsService {

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
    return this.http.get('http://localhost:51680/api/TypeOfVehicles')
    .map(this.parseData)
    .catch(this.handleError);
  }

  getVehicleType(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/TypeOfVehicles/GetTypeOfVehicle?id=',id);
  }

  postMethodDemo(type): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/TypeOfVehicles/PostTypeOfVehicle", type);
  }

  putMethodDemo(id,type): Observable<any> {  
    return this.httpClient.put("http://localhost:51680/api/TypeOfVehicles/"+id, type);
  }

  deleteMethodDemo(id): Observable<any> {  
    return this.httpClient.delete("http://localhost:51680/api/TypeOfVehicles/"+id)
   
  }

}
