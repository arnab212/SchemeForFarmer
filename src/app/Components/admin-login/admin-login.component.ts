import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  flag:number=0;
  AdminLogin: FormGroup;
  constructor(private route:Router)
   {
    this.AdminLogin = new FormGroup({
      Username: new FormControl({value: 'admin', disabled: true}, [Validators.required]),
      Password: new FormControl('', [Validators.required])
       
    });
    
  }

  onSubmit() 
  {
    setTimeout(() => {
      if(this.AdminLogin.valid) 
    {
      console.log(this.v());
    }
    
    if(this.AdminLogin.controls.Password.value=="admin")
    {
      //redirect to admin
      this.route.navigate(['admin-home']);
      this.flag++;
    }
    if(this.flag==0)
    {
      alert("Sorry, try again");
    }
    }, 1000);
  }
  v() {
    return this.AdminLogin.value;
  }

  ngOnInit(): void {
  }


}
