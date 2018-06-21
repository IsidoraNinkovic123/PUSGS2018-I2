import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VehicleOperationsService {

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
    return this.httpClient.get('http://localhost:51680/api/Vehicles');
  }

  postMethodDemo(vehicle): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Vehicles/PostVehicle", vehicle);
  }

  putMethodDemo(id,vehicle): Observable<any> {  
    return this.httpClient.put("http://localhost:51680/api/Vehicles/"+id, vehicle);
  }

  getOneVehicle(id): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Vehicles/GetVehicle?id='+ id);
  }

  deleteMethodDemo(id): Observable<any> {  
    return this.httpClient.delete("http://localhost:51680/api/Vehicles/"+id)
  }

  getSearched(search): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Search/Search?search='+search)  
  }

  getFilter(search): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Search/Filter", search);
  }

}
