import { ThrowStmt } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { SoldDetails } from 'src/app/Models/SoldDetails';
import { RequestDetailsService } from 'src/app/Services/request-details.service';
import { SoldDetailsService } from 'src/app/Services/sold-details.service';

@Component({
  selector: 'app-my-bids',
  templateUrl: './my-bids.component.html',
  styleUrls: ['./my-bids.component.css']
})
export class MyBidsComponent implements OnInit {

  sold: SoldDetails[]=[]
  aadhar= localStorage.getItem('aadharCardNumber')
  req:RequestDetails[]=[];
  show: any[]=[];


  constructor(private soldhistory: SoldDetailsService, private request: RequestDetailsService, private route: Router) 
  {
    this.soldhistory.getbyId(this.aadhar!).subscribe(data=>{this.sold=data;
    console.log(this.sold);});
    this.request.getallrequests().subscribe(data=>{this.req=data;
      console.log(this.req)});
      
    
   
  }
  logout()
  {
    this.route.navigate(['home']);
    localStorage.removeItem('aadharCardNumber');
  }

  ngOnInit(): void 
  {
    setTimeout(() => {
      
      for(let sol of this.sold)
      {
        for(let r of this.req)
        {
          if(sol.requestId==r.requestId)
          {
            this.show.push({id: sol.requestId,cropname: r.cropName, quantity: r.cropQuantity, cost: sol.soldPrice })
      
          console.log(this.show)

          }
        }
        
       
      }
      
    }, 2000);
  }

}
