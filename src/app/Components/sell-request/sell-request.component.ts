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
  [x: string]: any;
rd= {} as RequestDetails; 

SellRequest =new FormGroup
({
  cropName: new FormControl("",[Validators.required]),
  fertilizerType: new FormControl("",[Validators.required]),
  cropQuantity: new FormControl("",[Validators.required]),
  cropType:new FormControl(""),
  soilPhCertificateDocument: new FormControl("",[Validators.required]),
})


constructor(private seller:RequestDetailsService,private route: Router) 
{    
 }


ngOnInit(): void {
}
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
  
  this.seller.upload(files).subscribe(references => {
    for (let key of Object.keys(references) as Array<keyof typeof references>) {
      data[key] = references[key];

    }
   this.rd.soilPhCertificateDocument=this.SellRequest.controls.soilPhCertificateDocument.value;
   
    this.seller.createnew(this.rd).subscribe(data=>{
      console.log(data);
    });
  });}
  onFileChange(event: any, fieldname: string) {

    if (event.target.files.length > 0)
     {
      const file = (event.target.files[0] as File);
      this.SellRequest.get(fieldname)?.setValue(file)
    } 

  }
}

