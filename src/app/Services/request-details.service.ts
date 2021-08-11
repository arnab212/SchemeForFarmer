import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestDetails } from '../Models/RequestDetails';

@Injectable({
  providedIn: 'root'
})
export class RequestDetailsService {

  constructor(private http: HttpClient) { }
  // req:string="https://localhost:44371/api/RequestDetails";
 
   getall():Observable<RequestDetails[]>
   {
     return this.http.get<RequestDetails[]>(`${environment.apiUrl}/RequestDetails`)
   }
   createnew(seller:RequestDetails):Observable<RequestDetails>
   {
     console.log(seller)
     return this.http.post<RequestDetails>(`${environment.apiUrl}/RequestDetails`, seller, {
       headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*'
         
       })
     });
   }
   upload(data: FormData) {
     return this.http.post<RequestDetails>(`${environment.apiUrl}/Upload`, data, {
       headers: new HttpHeaders({
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*'
       })
     });
    }
}
