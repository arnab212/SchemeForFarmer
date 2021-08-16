import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderDetails } from 'src/app/Models/BidderDetails';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { BidderDetailsService } from 'src/app/Services/bidder-details.service';
import { DownloadsService } from 'src/app/Services/downloads.service';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';

@Component({
  selector: 'app-approve-bidders',
  templateUrl: './approve-bidders.component.html',
  styleUrls: ['./approve-bidders.component.css']
})
export class ApproveBiddersComponent implements OnInit {

  request: RequestDetails[]=[];
  bidder:BidderDetails[]=[];
  biddercheck:BidderDetails[]=[];
  updatebidder = {} as BidderDetails;
  toggleText:string="Approve"
  
  BidderApproval=new FormGroup({
    status: new FormControl('', [Validators.required])
  });

  link:any;
  index:number=1
  
  constructor(private requestservice:RequestDetailsService, private bidderservice:BidderDetailsService, private downloadsservice:DownloadsService, private route: Router){
    this.initialize();

  }
  
  initialize(){
    this.requestservice.getallrequests().subscribe(data=>{this.request=data;
      console.log(this.request);});
    this.bidderservice.getallBidder().subscribe(data=>{this.bidder=data;
      console.log(this.bidder);}); 
    
  }
  onSubmit(form:BidderDetails){
    this.toggleText="Approved"
      console.log(this.updatebidder);
      this.bidderservice.getBidderbyId(form.aadharCardNumber).subscribe(data=>{this.updatebidder=data;
        console.log(this.updatebidder);});
      
      setTimeout(() => {
        this.updatebidder.status=true;
        console.log(this.updatebidder);
        this.bidderservice.updateBidder(form.aadharCardNumber,this.updatebidder).subscribe(data=>{this.bidder=data;
          console.log(this.bidder);});
          console.log(form.aadharCardNumber);
      }, 1000);      
  }
  showDocument(doc:any){
    this.downloadsservice.getFiles(doc).subscribe(data=>{this.link=data;});
    console.log(doc);
    console.log(this.link);
  }
  ngOnInit(): void {
    this.initialize();
    setTimeout(()=> {
      for(let bidder of this.bidder){
        if(!bidder.status){
          this.biddercheck.push(bidder); 
        }
      } 
    },1000);
    
  }

}
