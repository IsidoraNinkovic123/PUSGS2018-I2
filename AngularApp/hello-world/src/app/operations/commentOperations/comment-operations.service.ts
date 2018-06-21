import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommentOperationsService {

  constructor(private http: Http,private httpClient: HttpClient) { }
  
  
    private parseData(res: Response) {
      return res.json() || [];
    }
  
    private handleError(error: Response | any) {
      let errorMessage: string;
      errorMessage = error.message ? error.message : error.toString();
      return Observable.throw(errorMessage);
    }
  
    postMethodDemo(comment): Observable<any> { 
      return this.httpClient.post("http://localhost:51680/api/Comments/PostComment", comment);
    }
  
    getServiceComments(id,pageIndex,pageSize): Observable<any> {
      return this.httpClient.get('http://localhost:51680/api/Comments?serviceId='+id+'&pageIndex='+pageIndex+"&pageSize="+pageSize);
    }

    deleteMethodDemo(id): Observable<any> {  
      return this.httpClient.delete("http://localhost:51680/api/Comments/"+id)
     
    }

    putMethodDemo(id,comm): Observable<any> {  
      return this.httpClient.put("http://localhost:51680/api/Comments/"+id, comm);
    }
  
}
