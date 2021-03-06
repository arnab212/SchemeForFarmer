import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestDetails } from '../Models/RequestDetails';
import { SoldDetails } from '../Models/SoldDetails';

@Injectable({
  providedIn: 'root'
})
export class SoldDetailsService {

  constructor(private http: HttpClient) { }

  getall():Observable<SoldDetails[]>
  {
    return this.http.get<SoldDetails[]>(`${environment.apiUrl}/SoldDetails`)
  }
  createnew(sold:SoldDetails):Observable<SoldDetails>
  {
    console.log(sold)
    return this.http.post<SoldDetails>(`${environment.apiUrl}/SoldDetails`, sold, {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
  getbyId(id?:string):Observable<SoldDetails[]>
     {
       console.log(id)
       return this.http.get<SoldDetails[]>(`${environment.apiUrl}/SoldDetails/GetByAadhar/`+id,{
         headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
           'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Method':'*'
           
         })
       });
     }
}
