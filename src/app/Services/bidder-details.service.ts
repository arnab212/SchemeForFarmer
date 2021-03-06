import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BidderDetails } from '../Models/BidderDetails';
import { BidderFiles } from '../Models/BidderFiles';

@Injectable({
  providedIn: 'root'
})
export class BidderDetailsService 
{
  constructor(private http: HttpClient) { }
  // req:string="https://localhost:44356/api/FarmerDetails";
 
   getallBidder():Observable<BidderDetails[]>
   {
     return this.http.get<BidderDetails[]>(`${environment.apiUrl}/BidderDetails`)
   }
   createnew(bidder:BidderDetails):Observable<BidderDetails>
   {
      console.log(bidder)
     return this.http.post<BidderDetails>(`${environment.apiUrl}/BidderDetails`, bidder, {
       headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*'
         
       })
     });
   }
   upload(data: FormData) {
     return this.http.post<BidderFiles>(`${environment.apiUrl}/Upload`, data, {
       headers: new HttpHeaders({
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*'
       })
     });
   }
   getBidderbyId(id:string):Observable<any>
  {
    return this.http.get<any>(`${environment.apiUrl}/BidderDetails/`+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  updateBidder(id:string, bidder:BidderDetails):Observable<any>
  {
    console.log(bidder)
    console.log("In UpdateBidderr")
    
    return this.http.put<any>(`${environment.apiUrl}/BidderDetails/`+id , bidder,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
