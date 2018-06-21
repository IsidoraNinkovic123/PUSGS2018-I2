import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor} from '@angular/common/http';
import { LoginOperationsService } from '../operations/logInOperations/login-operations.service';
import { Observable } from 'rxjs';
import { Http } from '@angular/http/src/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: LoginOperationsService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Intercepted");
    console.log("Token : ", localStorage.jwt);

    let jwt = localStorage.jwt;
    if (jwt) 
    {
        console.log(request)
        request = request.clone(
            {
                setHeaders: 
                { 
                    Authorization: `Bearer ${jwt}`
                }
            });
        console.log(request)
    }

    return next.handle(request);
  }
}