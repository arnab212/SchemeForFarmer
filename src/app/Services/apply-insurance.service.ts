import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplyInsurance } from '../Models/ApplyInsurance';

@Injectable({
  providedIn: 'root'
})
export class ApplyInsuranceService {

  constructor(private http: HttpClient) { }
  getall():Observable<ApplyInsurance[]>
  {
    return this.http.get<ApplyInsurance[]>(`${environment.apiUrl}/AppliedInsurances`)
  }
  CreateAI(ApplyInsurance:ApplyInsurance):Observable<ApplyInsurance>
  {
    return this.http.post<ApplyInsurance>(`${environment.apiUrl}/AppliedInsurances`,ApplyInsurance,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
    
  }
/*   public getPremiumEstimate(Season:string): Observable<any>{  
    return this.http.get<number>(this.baseURL+"/"+Season+"/premium");

  } */
 public getId(Area:number,Season:string):Observable<any>{
   return this.http.get<number>(`${environment.apiUrl}/AppliedInsurances/`+Area+"/"+Season+"/CompanyId");

 }
}
