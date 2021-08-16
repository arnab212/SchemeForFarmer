import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplyInsurance } from 'src/app/Models/ApplyInsurance';
import { ApplyInsuranceService } from 'src/app/Services/apply-insurance.service';
@Component({
  selector: 'app-approve-claims',
  templateUrl: './approve-claims.component.html',
  styleUrls: ['./approve-claims.component.css']
})
export class ApproveClaimsComponent implements OnInit {

  policy: ApplyInsurance[]=[];
  showpolicy:ApplyInsurance[]=[];
  updatepolicy= {} as ApplyInsurance;
  toggleText:string="Approve"
  
  claimApproval=new FormGroup({
    status: new FormControl('', [Validators.required])
  });

  constructor(private appliedinsurance:ApplyInsuranceService) 
  {
    this.appliedinsurance.getall().subscribe(data=>{this.policy=data;
    console.log(this.policy);})
    this.searchPolicy();
   

  }
  searchPolicy()
  {
    setTimeout(() => {
      for(let p of this.policy)
      {
        if(p.approvedStatus==false)
        {
          this.showpolicy.push(p);
        }
      }
      
      
    }, 2000);

  }

  ngOnInit(): void {
  }

  onSubmit(form: ApplyInsurance){
    this.toggleText="Approved"
      
      this.appliedinsurance.getpolicyById(form.policyNumber).subscribe(data=>{this.updatepolicy=data;
        console.log(this.updatepolicy);});
      
      setTimeout(() => {
        this.updatepolicy.approvedStatus=true;
        console.log(this.updatepolicy);
        this.appliedinsurance.updatePolicy(form.policyNumber,this.updatepolicy).subscribe(data=>{this.updatepolicy=data;
          console.log(this.updatepolicy);});
          console.log(form.aadharCardNumber);
      }, 1000);      
  }

}
