import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GradeOperationsService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getServiceGrades(Userid,ServiceId): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Grade/?a='+Userid+'&s='+ServiceId);
  }

  postMethodDemo(grade): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Grade/PostGrade", grade);
  }

  getGradesPermision(id):Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Grade/?p='+id);
  }

}
