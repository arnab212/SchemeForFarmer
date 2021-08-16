import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){

    let farmerid=localStorage.getItem('aadharCardNumber');
    let bidderid=localStorage.getItem('aadharCardNumber');
    let adminId=localStorage.getItem('adminName');
    
  if(farmerid==null && bidderid==null)
  {
    
     if(adminId=="admin")
     {
      return true;
     }
     else{
       
       return false;
       
     }
     
  }

  this.router.navigate(['home']);
  return false;

  }
    
  }

  