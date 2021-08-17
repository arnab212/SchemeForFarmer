import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){

    let farmerid=localStorage.getItem('aadharCardNumber');
    
    
  if(farmerid!=null )
  {        
      return true;
     
  }

  this.router.navigate(['home']);
  return false;

  }
    
  }
