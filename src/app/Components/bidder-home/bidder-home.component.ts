import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BidHistory } from 'src/app/Models/BidHistory';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { BidHistoryService } from 'src/app/Services/bid-history.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';


@Component({
  selector: 'app-bidder-home',
  templateUrl: './bidder-home.component.html',
  styleUrls: ['./bidder-home.component.css']
})
export class BidderHomeComponent implements OnInit 
{
  
  isShow :boolean= true;
  buttonName:string="Hide Details";
  updatedreq={} as RequestDetails;
  bid= {} as BidHistory;
  
  req: RequestDetails[]=[]
  showreq: RequestDetails[]=[];
  currentBidForm=new FormGroup(
    {
      bidAmount: new FormControl()
    }
  )
 
  toggleDisplay(item: any) {
    item.show = !item.show;
    if(item.show){
      
      this.buttonName="View Details";
    }
    else{
      this.buttonName=" Hide Details";
    }
  }

 
  constructor(private request: RequestDetailsService, private bidhistory: BidHistoryService) 
  {
      this.request.getallrequests().subscribe(data=>{this.req=data;
      console.log(this.req);})
      setTimeout(() => {
        for (let set of this.req)
        {
          if(!set.status)
          {
            this.showreq.push(set);
          }
        }
        
      }, 2000);
  }

  ngOnInit(): void 
  { }
  
  bidNow(r: RequestDetails)
  {
    if(r.cuurentBid<this.currentBidForm.controls.bidAmount.value)
    {
      
      r.cuurentBid=this.currentBidForm.controls.bidAmount.value;
      console.log(r)
      this.request.update(r.requestId,r).subscribe(date=>{this.updatedreq=date;
     console.log(this.updatedreq)})
     
        this.bid.bidPrice=r.cuurentBid;
        this.bid.bidderAadharCardNumber=localStorage.getItem('aadharCardNumber')!;
        this.bid.requestId=r.requestId;
        this.bidhistory.createnew(this.bid).subscribe(data=>{this.bid=data})
       
    
    }
    else{
      alert("you will have to bid more than the current amount")
    }
  
  }
  decrement(r: RequestDetails)
  {
    r.cuurentBid-=100;
  }

  increment(r: RequestDetails)
  {
    r.cuurentBid+=100;
  }
  

}
