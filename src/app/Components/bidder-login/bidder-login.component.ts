import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderDetails } from 'src/app/Models/BidderDetails';
import { BidderDetailsService } from 'src/app/Services/bidder-details.service';

@Component({
  selector: 'app-bidder-login',
  templateUrl: './bidder-login.component.html',
  styleUrls: ['./bidder-login.component.css']
})
export class BidderLoginComponent implements OnInit {

  bidders: BidderDetails[]=[];
  flag:number=0;

  BidderLogin: FormGroup;
  constructor(private bidder:BidderDetailsService, private route:Router)
   {
    this.BidderLogin = new FormGroup({
      EmailId: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    });
    this.bidder.getall().subscribe(data=>{this.bidders=data;
      console.log(this.bidders);});   
   
  }

  onSubmit() 
  {
    setTimeout(() => {
      if(this.BidderLogin.valid) 
    {
      console.log(this.v());
    }
    for(let bidder of this.bidders)
    {
      if(bidder.emailId==this.BidderLogin.controls.EmailId.value && bidder.password==this.BidderLogin.controls.Password.value)
      {
        localStorage.setItem('aadharCardNumber', bidder.aadharCardNumber)
        //redirect to farmer home
        this.route.navigate(['bidder-home']);
        alert("successful");
        this.flag++;
        break;
      }
      
    }
    if(this.flag==0)
    {
      alert("sorry");
    }
      
    }, 2000);
    
    
    
  }
  v() {
    return this.BidderLogin.value;
  }
  ngOnInit():void
  {
    this.bidder.getall().subscribe(data=>{this.bidders=data;
      console.log(this.bidders);});
  }


  registration()
  {
    this.route.navigate(['bidder-registration']);
  }

}
