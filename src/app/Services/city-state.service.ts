import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityState } from '../Models/CityState';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {

  constructor(private http: HttpClient) { }
  
  getCity():Observable<CityState[]>
  {
    return this.http.get<CityState[]>(`${environment.apiUrl}/CityStates`)
  }

  
}
