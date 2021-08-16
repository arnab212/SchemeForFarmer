import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BidderDetails } from 'src/app/Models/BidderDetails';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
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
  name:string="";
  allRequest:RequestDetails[]=[];
  farmerRequest:RequestDetails[]=[];
  far:FarmerDetails[]=[];
  aadharCardNumber=localStorage.getItem('aadharCardNumber');//of farmer
  //farmerRequestSold:RequestDetails[]=[];
  aadaharcardnumber=localStorage.getItem('aadharCardNumber');//of bidder
  allSold:SoldDetails[]=[];
  //farmerSold:SoldDetails[]=[];
  allBidder:BidderDetails[]=[];
  specificBidder: BidderDetails[]=[];
  soldTo= {} as BidderDetails;
  soldhistory: any[]=[];

  constructor(private request: RequestDetailsService, private farmer: FarmerDetailsService, private sold:SoldDetailsService, private bidder: BidderDetailsService, private route: Router) 
  {
    console.log(this.aadharCardNumber)
    
      this.request.getRequestByAadhar(this.aadharCardNumber!).subscribe(data=>{this.farmerRequest=data;
        console.log(this.farmerRequest);}); 
      this.sold.getall().subscribe(data=>{this.allSold=data;
        console.log(this.allSold);}); 
      this.bidder.getallBidder().subscribe(data=>{this.allBidder=data;
      console.log(this.allBidder)})
        this.farmer.getallFarmers().subscribe(data=>{this.far=data;
          console.log(this.far);}); 
    
    
  }
  logout()
  {
    this.route.navigate(['home']);
    localStorage.removeItem('aadharCardNumber')
  } 

 

  ngOnInit(): void {
    setTimeout(()=> {
      for(let farmer of this.far){
        console.log("In for");
        if(farmer.aadharCardNumber==this.aadharCardNumber){
          console.log("In if")
          this.name=farmer.fullName;   
        }
      } 
    },1000);


    //methos---

    
    setTimeout(() => 
    {
      
      for (let req of this.farmerRequest)
      {
        for(let sol of this.allSold)
        {
         if(req.requestId==sol.requestId)
        {
        //   this.farmerSold.push(sol);
        //  this.farmerRequestSold.push(req);
          console.log(sol.aadharCardNumber)
           // setTimeout(() => {
              // this.bidder.getBidderbyId(sol.aadharCardNumber).subscribe(data=>{this.soldTo=data;
              //   console.log(this.soldTo)});
           // }, 2000);
             // this.getsold(req.requestId)
             for(let b of this.allBidder)
             {
               if(sol.aadharCardNumber== b.aadharCardNumber)
               {
                this.soldhistory.push({rerId: req.requestId, cropname: req.cropName, quantity: req.cropQuantity,
                  soldprice: req.cuurentBid, boughtby: b.fullName, contact: b.contactNumber})
                  console.log(this.soldhistory);  

               }
             }
            
            
            // setTimeout(() => {
            //   this.soldhistory.push({rerId: req.requestId, cropname: req.cropName, quantity: req.cropQuantity,
            //     soldprice: req.cuurentBid, boughtby: this.soldTo.fullName, contact: this.soldTo.contactNumber})
            //     console.log(this.soldhistory);         
            // }, 2000);
          
           
            
            //console.log(this.soldhistory);
          
        }
        
      }
    }   
        
      
    }, 2000);
     
  }
  // getsold(req:number)
  // {
  //   for(let sol of this.allSold)
  //   {
  //       if(req==sol.requestId)
  //       {
  //         this.bidder.getBidderbyId(sol.aadharCardNumber).subscribe(data=>{this.soldTo=data;
  //           console.log(this.soldTo)});
          
  //       }
  //   }

  // }

      }
