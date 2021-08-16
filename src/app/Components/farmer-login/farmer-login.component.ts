import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  farmers: FarmerDetails[]=[];
  flag:number=0;

  FarmerLogin: FormGroup;
  constructor(private farmer:FarmerDetailsService, private route:Router)
   {
    this.FarmerLogin = new FormGroup({
      EmailId: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    });
    this.farmer.getallFarmers().subscribe(data=>{this.farmers=data;
      console.log(this.farmers);});    
  }

  onSubmit() 
  {
   setTimeout(() => {
     if(this.FarmerLogin.valid) 
    {
      console.log(this.v());
    }
    for(let farmer of this.farmers)
    {
      if(farmer.emailId==this.FarmerLogin.controls.EmailId.value && farmer.password==this.FarmerLogin.controls.Password.value)
      {
        if(farmer.status)
        {
          localStorage.setItem('aadharCardNumber',farmer.aadharCardNumber)
          //redirect to farmer home
          this.route.navigate(['marketplace']);
          alert("successful");
          this.flag++;
          break;
        }
        else
        {
          alert("Your request is under process, please try again after some time")
        }
        this.flag++;
        
      }
      
    }
    if(this.flag==0)
    {
      alert("sorry");
    }
     
   }, 2000);
    
    
  }
  v() {
    return this.FarmerLogin.value;
  }
  ngOnInit():void
  {}
    
  registration()
  {
    this.route.navigate(['farmer-registration']);
  }
}
