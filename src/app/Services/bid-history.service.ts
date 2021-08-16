import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BidderDetails } from '../Models/BidderDetails';
import { BidHistory } from '../Models/BidHistory';

@Injectable({
  providedIn: 'root'
})
export class BidHistoryService {

  constructor(private http: HttpClient) { }

  createnew(bid:BidHistory):Observable<BidHistory>
  {
     console.log(bid)
    return this.http.post<BidHistory>(`${environment.apiUrl}/BidHistories`, bid, {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  getLatestBid(id:number):Observable<BidHistory>
     {
       console.log(id)
       return this.http.get<BidHistory>(`${environment.apiUrl}/BidHistories/LatestBid/`+id,{
         headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
           'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Method':'*'
           
         })
       });
     }
     getPreviousBids(id:number):Observable<BidHistory[]>
     {
       console.log(id)
       return this.http.get<BidHistory[]>(`${environment.apiUrl}/BidHistories/PreviousBids/`+id,{
         headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
           'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Method':'*'
           
         })
       });
     }
}
