import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { RequestDetails } from 'src/app/Models/RequestDetails';
import { DownloadsService } from 'src/app/Services/downloads.service';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { RequestDetailsService } from 'src/app/Services/request-details.service';

@Component({
  selector: 'app-approve-farmers',
  templateUrl: './approve-farmers.component.html',
  styleUrls: ['./approve-farmers.component.css']
})
export class ApproveFarmersComponent implements OnInit {

  request: RequestDetails[]=[];
  farmer:FarmerDetails[]=[];
  farmercheck:FarmerDetails[]=[];
  updatefarmer = {} as FarmerDetails;
  toggleText:string="Approve"
  
  FarmerApproval=new FormGroup({
    status: new FormControl('', [Validators.required])
  });

  link:any;
  index:number=1
  
  constructor(private requestservice:RequestDetailsService, private farmerservice:FarmerDetailsService, private downloadsservice:DownloadsService, private route: Router){
    this.initialize();

  }
  
  initialize(){
    this.requestservice.getallrequests().subscribe(data=>{this.request=data;
      console.log(this.request);});
    this.farmerservice.getallFarmers().subscribe(data=>{this.farmer=data;
      console.log(this.farmer);}); 
    
  }
  onSubmit(form:FarmerDetails){
    this.toggleText="Approved"
      console.log(this.updatefarmer);
      this.farmerservice.getFarmerById(form.aadharCardNumber).subscribe(data=>{this.updatefarmer=data;
        console.log(this.updatefarmer);});
      
      setTimeout(() => {
        this.updatefarmer.status=true;
        console.log(this.updatefarmer);
        this.farmerservice.updateFarmer(form.aadharCardNumber,this.updatefarmer).subscribe(data=>{this.farmer=data;
          console.log(this.farmer);});
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
      for(let farmer of this.farmer){
        if(!farmer.status){
          this.farmercheck.push(farmer); 
        }
      } 
    },1000);
    
  }


}
