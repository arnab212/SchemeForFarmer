import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { RequestDetailsService } from 'src/app/Services/request-details.service';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit
{
 
rd= {} as RequestDetails; 
flag=0;
SellRequest =new FormGroup
({
  cropName: new FormControl("",[Validators.required]),
  fertilizerType: new FormControl("",[Validators.required]),
  cropQuantity: new FormControl("",[Validators.required]),
  cropType:new FormControl(""),
  Msp: new FormControl("",[Validators.required]),
  soilPhCertificateDocument: new FormControl("",[Validators.required]),
})


constructor(private seller:RequestDetailsService,private route: Router) 
{}


ngOnInit(): void {}

create(data:any)
{
  let files = new FormData();
  for (let key of ["SoilPHCertificateDocument"]) 
  {
    files.append(key, data[key]);
  }
  this.rd.aadharCardNumber=(localStorage.getItem('aadharCardNumber')!);
  this.rd.cropName=this.SellRequest.controls.cropName.value;
  this.rd.cropQuantity=this.SellRequest.controls.cropQuantity.value;
  this.rd.cropType=this.SellRequest.controls.cropType.value;
  this.rd.fertilizerType=this.SellRequest.controls.fertilizerType.value;
  this.rd.msp=this.SellRequest.controls.Msp.value;
  this.rd.cuurentBid= this.rd.msp;
  
  
  this.seller.upload(files).subscribe(references => {
    for (let key of Object.keys(references) as Array<keyof typeof references>) {
      data[key] = references[key];

    }
   this.rd.soilPhCertificateDocument=this.SellRequest.controls.soilPhCertificateDocument.value;
   
    this.seller.createnew(this.rd).subscribe(data=>{
      console.log(data);
      this.flag++;
    });
  });
  setTimeout(() => {
    if(this.flag>0)
  {
    alert("Request Placed Successfully");
  this.route.navigate(['marketplace']);
  }
  else{alert("sorry your order was not placed")}
    
  }, 3000);
  
  
}
  onFileChange(event: any, fieldname: string) {

    if (event.target.files.length > 0)
     {
      const file = (event.target.files[0] as File);
      this.SellRequest.get(fieldname)?.setValue(file)
    } 

  }
}

