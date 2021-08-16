import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApplyInsurance
{
  policyNumber:number=0;
    season:string="";
    cropName:string="";
    sumInsured:number=0;
    area:number=0;
    approvedStatus:boolean=false;
    claimStatus:boolean=false;
    companyId:number=0;
    premiumamount:number=0;
    aadharCardNumber?:string="";


}