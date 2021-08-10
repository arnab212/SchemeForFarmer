import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LandDetails } from '../Models/LandDetails';

@Injectable({
  providedIn: 'root'
})
export class LandDetailsService {

  constructor(private http: HttpClient) { }

  getallLand():Observable<LandDetails[]>
  {
    return this.http.get<LandDetails[]>(`${environment.apiUrl}/LandDetails`)
  }

  createnewLand(land:LandDetails):Observable<LandDetails>
  {
    console.log(land)
    return this.http.post<LandDetails>(`${environment.apiUrl}/LandDetails`, land, {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
}
