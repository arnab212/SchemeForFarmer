import { Component, OnInit } from '@angular/core';
import { BidderDetails } from 'src/app/Models/BidderDetails';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { SoldDetails } from 'src/app/Models/SoldDetails';
import { BidderDetailsService } from 'src/app/Services/bidder-details.service';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';
import { SoldDetailsService } from 'src/app/Services/sold-details.service';

@Component({
  selector: 'app-crop-sold-history',
  templateUrl: './crop-sold-history.component.html',
  styleUrls: ['./crop-sold-history.component.css']
})
export class CropSoldHistoryComponent implements OnInit 
{
  allRequest:RequestDetails[]=[];
  farmerRequest:RequestDetails[]=[];
  //farmerRequestSold:RequestDetails[]=[];
  aadaharcardnumber=localStorage.getItem('aadharCardNumber');
  allSold:SoldDetails[]=[];
  //farmerSold:SoldDetails[]=[];
  allBidder:BidderDetails[]=[];
  specificBidder: BidderDetails[]=[];
  soldTo= {} as BidderDetails;
  soldhistory: any[]=[];

  constructor(private request: RequestDetailsService, private farmer: FarmerDetailsService, private sold:SoldDetailsService, private bidder: BidderDetailsService) 
  {
    
      this.request.getall().subscribe(data=>{this.allRequest=data;
        console.log(this.allRequest);}); 
      this.sold.getall().subscribe(data=>{this.allSold=data;
        console.log(this.allSold);}); 
      this.bidder.getall().subscribe(data=>{this.allBidder=data;
        console.log(this.allBidder)})
    
    setTimeout(() => 
    {
      for (let request of this.allRequest)
      {
        if(request.aadharCardNumber==this.aadaharcardnumber)
        {
          this.farmerRequest.push(request);
        }
      }
      for (let req of this.farmerRequest)
      {
        for(let sol of this.allSold)
        {
          if(req.requestId==sol.requestId)
          {
            // this.farmerSold.push(sol);
            // this.farmerRequestSold.push(req);
            console.log(sol.aadharCardNumber)
            this.bidder.getbyId(sol.aadharCardNumber).subscribe(data=>{this.soldTo=data;
            console.log(this.soldTo)});
            setTimeout(() => {
              this.soldhistory.push({rerId: req.requestId, cropname: req.cropName, quantity: req.cropQuantity,
                soldprice: sol.soldPrice, boughtby: this.soldTo.fullName, contact: this.soldTo.contactNumber})
                           
            }, 1000);
          
           
            
            console.log(this.soldhistory);
          }
        }
      }
      
    }, 2000);
      
      
   

  }

  ngOnInit(): void {}

}
