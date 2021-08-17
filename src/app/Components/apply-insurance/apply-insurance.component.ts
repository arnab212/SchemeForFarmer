import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyInsurance } from 'src/app/Models/ApplyInsurance';
import { InsuranceCompany } from 'src/app/Models/InsuranceCompany';
import { ApplyInsuranceService } from 'src/app/Services/apply-insurance.service';
import { InsuranceCompanyService } from 'src/app/Services/insurance-company.service';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {

  premiumAmount: number=0;
  id!: number;
  CompanyName:string="";
  CalculatedSumInsured:number=0;
  calculatearea:number=0;
  calculateseason:string="";
  SumInsured1:number=0;
  cropname:string="";
  Ch:any[]=[];
  AInsurance={} as ApplyInsurance; 
  Aadhar=localStorage.getItem('aadharCardNumber')
CD:InsuranceCompany[]=[];
 
  constructor(private ApplyInsuranceService: ApplyInsuranceService,private route: Router, private InsuranceCompanyService: InsuranceCompanyService) { 
    this.InsuranceCompanyService.getall().subscribe(response=>{ this.CD=response;console.log(this.CD)});
  }
   
  ngOnInit(): void {
  }

  ApplyInsurance=new FormGroup({Season:new FormControl(),Year:new FormControl(),CropName:new FormControl(),SumInsured:new FormControl(),Area:new FormControl()})
  
  
  submit(){
    let Season=this.ApplyInsurance.controls.Season.value;
    this.calculateseason=Season;
    let Area=this.ApplyInsurance.controls.Area.value;
    this.calculatearea=Area;
    let CropName=this.ApplyInsurance.controls.CropName.value;
    this.cropname=CropName;
    this.ApplyInsuranceService.getId(Area,Season).subscribe((result: number)=>{
       this.id=result;
       console.log("Company Id:"+this.id);
     
   this.CD.forEach(element => {
      if(element.companyId==this.id){
        this.CompanyName=element.companyName;
        console.log(this.CompanyName);
        this.SumInsured1=element.sumInsured;
        console.log(this.SumInsured1);
        this.CalculatedSumInsured=this.calculatearea*element.sumInsured;
        console.log(this.CalculatedSumInsured);
       
          
        if(this.calculateseason=="Rabi"){
          this.premiumAmount=0.015*this.CalculatedSumInsured;
           console.log(this.premiumAmount);
        }
        else if (this.calculateseason=="Kharif"){
          this.premiumAmount=0.02*this.CalculatedSumInsured;
           console.log(this.premiumAmount);
      }
      else {
        this.premiumAmount=0.05*this.CalculatedSumInsured;
         console.log(this.premiumAmount);
    }
   
    this.Ch.push({name:this.CompanyName,sum:this.SumInsured1,cname:this.cropname,carea:this.calculatearea,csi:this.CalculatedSumInsured,pa:this.premiumAmount})
      }
      
        
      })
      
     
    });
 
   console.log(this.ApplyInsurance.value);
  
  
  }

  apply(){
    this.AInsurance.season=this.ApplyInsurance.controls.Season.value;
    this.AInsurance.companyId=this.id;
    this.AInsurance.cropName=this.ApplyInsurance.controls.CropName.value;
    this.AInsurance.sumInsured=this.CalculatedSumInsured;
    this.AInsurance.area=this.calculatearea;
    this.AInsurance.premiumamount=this.premiumAmount;
    this.AInsurance.aadharCardNumber=this.Aadhar!;
    console.log(this.AInsurance);
    setTimeout(() => {       
      this.ApplyInsuranceService.CreateAI(this.AInsurance).subscribe(data=>{this.AInsurance=data;console.log(this.AInsurance);console.log(this.AInsurance.policyNumber)});
    }, 2000);
   
    

    
  }
  logout()
  {
    this.route.navigate(['home']);
    localStorage.removeItem('aadharCardNumber')
  }

}
