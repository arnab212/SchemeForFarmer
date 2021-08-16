import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidderGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){

    
    let bidderid=localStorage.getItem('aadharCardNumber');
    
  if(bidderid!=null)
  { 
     
      return true;
    
     
  }

  this.router.navigate(['home']);
  return false;

  }
    
  }
