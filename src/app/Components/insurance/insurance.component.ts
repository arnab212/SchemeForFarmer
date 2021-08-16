import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.route.navigate(['home']);
    localStorage.removeItem('aadharCardNumber')
  }

}
