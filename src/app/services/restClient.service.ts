import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RestService{

    constructor(private http:HttpClient){}

    fetchJsonData(): Observable<Object>{
       return this.http.get('http://rest-service.guides.spring.io/greeting');
    }

    fetchSmallUrl(bigUrlReq: String): Observable<any>{
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        let body={
            bigUrl: bigUrlReq
        }
        return this.http.post('http://localhost:9000/getUrl',JSON.stringify(body),httpOptions);
        
    }

}