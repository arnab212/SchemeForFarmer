import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FarmerDetails } from '../Models/FarmerDetails';
import { FarmerFiles } from '../Models/FarmerFiles';

@Injectable({
  providedIn: 'root'
})
export class FarmerDetailsService {

  constructor(private http: HttpClient) { }
 // req:string="https://localhost:44356/api/FarmerDetails";

  getall():Observable<FarmerDetails[]>
  {
    return this.http.get<FarmerDetails[]>(`${environment.apiUrl}/FarmerDetails`)
  }
  createnew(farmer:FarmerDetails):Observable<FarmerDetails>
  {
    console.log(farmer)
    return this.http.post<FarmerDetails>(`${environment.apiUrl}/FarmerDetails`, farmer, {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
  upload(data: FormData) {
    return this.http.post<FarmerFiles>(`${environment.apiUrl}/Upload`, data, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
