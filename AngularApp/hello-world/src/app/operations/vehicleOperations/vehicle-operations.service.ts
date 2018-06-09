import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    return this.http.get('http://localhost:51680/api/Vehicles')
    .map(this.parseData)
    .catch(this.handleError);
  }

  postMethodDemo(vehicle): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Vehicles/PostVehicle", vehicle);
  }
  
  postLogo(formData,options): Observable<any>
  {
    return this.http.post("http://localhost:51680/api/Vehicles/PostLogo", formData, options)
  }
}
