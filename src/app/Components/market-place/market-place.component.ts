import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidderDetails } from 'src/app/Models/BidderDetails';
import { BidHistory } from 'src/app/Models/BidHistory';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { SoldDetails } from 'src/app/Models/SoldDetails';
import { BidHistoryService } from 'src/app/Services/bid-history.service';
import { BidderDetailsService } from 'src/app/Services/bidder-details.service';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';
import { SoldDetailsService } from 'src/app/Services/sold-details.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  request: RequestDetails[]=[];
  farmer:FarmerDetails[]=[];
  uitem={} as RequestDetails;
  aadharCardNumber=localStorage.getItem('aadharCardNumber');
  sol= {} as SoldDetails;
  latestBid= {} as BidHistory;
  previousBidList: BidHistory[]=[];
  previousBidData: any[]=[];
  bider= {} as BidderDetails;
  name:string="";
  isShowDiv = true;
  buttonName:string="Hide Details"
  pbbuttonName:string="Hide Previous Bids"
   
  toggleViewDetails(item:any) {
    item.show = !item.show;
    if(item.show){
      this.buttonName="View Details";
    }
    else{
      this.buttonName=" Hide Details";
    }
    
    
  }

  constructor(private requestservice:RequestDetailsService,private bid: BidHistoryService ,private farmerservice:FarmerDetailsService,private sold:SoldDetailsService, private route: Router, private bidder:BidderDetailsService) { 
    this.initialize();
    console.log(this.aadharCardNumber)
  }
  initialize(){
        this.requestservice.getRequestByAadharAndStatus(this.aadharCardNumber!).subscribe(data=>{this.request=data;
          console.log(this.request);});
        this.farmerservice.getallFarmers().subscribe(data=>{this.farmer=data;
          console.log(this.farmer);}); 
         
  }

  ngOnInit(): void { 
    this.initialize();
    console.log("Before for");
    console.log(this.aadharCardNumber);
    setTimeout(()=> {
      for(let farmer of this.farmer){
        console.log("In for");
        if(farmer.aadharCardNumber==this.aadharCardNumber){
          console.log("In if")
          this.name=farmer.fullName;   
        }
      } 
    },1000);
     
  }
  soldlist(item: RequestDetails)
  {
    this.sol.requestId=item.requestId;
    this.sol.soldPrice=item.cuurentBid;
    this.sol.totalPrice=item.cuurentBid;
    item.status=true;
    console.log("Before updating status");
    this.requestservice.update(item.requestId, item).subscribe(data=>{this.uitem=data;
    console.log(this.uitem)});
    console.log("After updating status");
    setTimeout(() => {
      console.log("before latest bid");
      this.bid.getLatestBid(item.requestId).subscribe(data=>{this.latestBid=data;
      console.log(this.latestBid)});
      console.log("got latest bid");      
    }, 2000);
    
    setTimeout(() => {
     console.log(this.latestBid.bidderAadharCardNumber);
      this.sol.aadharCardNumber=this.latestBid.bidderAadharCardNumber;
      console.log("status updated")
      this.sold.createnew(this.sol).subscribe(data=>{this.sol=data;})   
      console.log("sold Table done") 
    }, 3000);
    setTimeout(() => {
      this.route.navigate(['crop-sold-history'])
    }, 2000);
   

    
  }
  logout()
  {
    this.route.navigate(['home']);
    localStorage.removeItem('aadharCardNumber')
  }

  previousBids(item:RequestDetails)
  {
      this.bid.getPreviousBids(item.requestId).subscribe(data=>{this.previousBidList=data;
      console.log(this.previousBidList)});
      // setTimeout(() => {
      //   for(let i of this.previousBidList)
      //   {
      //      this.bidder.getBidderbyId(i.bidderAadharCardNumber).subscribe(data=>{this.bider=data;
      //         console.log(this.bider);});   
      //         setTimeout(() => {
      //           console.log(this.bider);
      //           console.log(i.bidPrice);
      //           this.previousBidData.push({biddername: this.bider.fullName, bidamt: i.bidPrice});     
                
      //         }, 3000);
                 
      //   }
      // }, 4000);
     
  }
}
