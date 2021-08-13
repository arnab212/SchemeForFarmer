import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  request: RequestDetails[]=[];
  farmer:FarmerDetails[]=[];
  aadharCardNumber=localStorage.getItem('aadharCardNumber');
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

  constructor(private requestservice:RequestDetailsService,private farmerservice:FarmerDetailsService, private route: Router) { 
    this.initialize();
    console.log(this.aadharCardNumber)
  }
  initialize(){
        this.requestservice.getallrequests().subscribe(data=>{this.request=data;
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
}
