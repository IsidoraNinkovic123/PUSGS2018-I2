import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RegistrationOperationsService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  postMethodDemo(user): Observable<any> { 
    return this.httpClient.post("http://localhost:51680/api/Account/Register", user);
  }
}
