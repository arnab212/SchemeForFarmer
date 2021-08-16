import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceCompany } from '../Models/InsuranceCompany';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  constructor(private http: HttpClient) { }
  getall():Observable<InsuranceCompany[]>
  {
    return this.http.get<InsuranceCompany[]>(`${environment.apiUrl}/InsuranceCompanies`)

}
}
