import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityState } from 'src/app/Models/CityState';
import { FarmerDetails } from 'src/app/Models/FarmerDetails';
import { CityStateService } from 'src/app/Services/city-state.service';
import { FarmerDetailsService } from 'src/app/Services/farmer-details.service';
import { PasswordCheck } from 'src/app/Validators/CustomeValidation';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit 
{
  city:CityState[]=[] 


  FarmerRegistration =new FormGroup
  ({
    FullName: new FormControl("",[Validators.required,Validators.pattern("^[ a-zA-Z]+$")]),
    ContactNumber: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]+$")]),
    EmailId: new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    AadharCardNumber: new FormControl("",[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern("^[0-9]+$")]),
    Address: new FormControl("",[Validators.required]),
    City: new FormControl(""),
    State: new FormControl("",[Validators.required]),
    Pincode: new FormControl("",[Validators.required]),
    AccountNumber: new FormControl("",[Validators.required,Validators.minLength(9),Validators.maxLength(18)]),
    IFSC: new FormControl("",[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    AadharDocument: new FormControl("",[Validators.required]),
    PanDocument: new FormControl("",[Validators.required]),
    CertificateDocument: new FormControl("",[Validators.required]),
    Password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    ConfirmPassword: new FormControl("",[Validators.required,PasswordCheck])
  })

  constructor(private farmer:FarmerDetailsService, private cityservice:CityStateService, private route: Router) 
  {
    this.cityservice.getCity().subscribe(data=>{this.city=data;
      console.log(this.city);});
     
    
   }

  ngOnInit(): void {
  }
  create(data:any)
  {
    let files = new FormData();
    for (let key of ["AadharDocument","PanDocument","CertificateDocument"]) 
    {
      files.append(key, data[key]);
    }
    this.farmer.upload(files).subscribe(references => {
      for (let key of Object.keys(references) as Array<keyof typeof references>) {
        data[key] = references[key];
      }
      delete data["ConfirmPassword"];
      delete data["State"];
      this.farmer.createnew(data).subscribe(data=>{
        console.log(data);
      });
    });
    this.route.navigate(['farmer-login']);
  }

  onFileChange(event: any, fieldname: string) {
  
    if (event.target.files.length > 0)
     {
      const file = (event.target.files[0] as File);
      this.FarmerRegistration.get(fieldname)?.setValue(file)
    } 

  }
   // Choose city using select dropdown
 
}
