import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bidder-home',
  templateUrl: './bidder-home.component.html',
  styleUrls: ['./bidder-home.component.css']
})
export class BidderHomeComponent implements OnInit 
{
  msg: string="";
  msg1:string="";
  msg2:string="";
  msg3:string="";
  item: string="";
  price: string=""; 
  isShow :boolean= true;
  isShoww:boolean= true;
  isshow:boolean=true;
  isshoww:boolean=true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  toggleDisplay1() {
    this.isShoww = !this.isShoww;
  }
  toggleDisplay2() {
    this.isshow = !this.isshow;
  }
  toggleDisplay3() {
    this.isshoww = !this.isshoww;
  }
  constructor() { }

  ngOnInit(): void {
  }
 
  /* clickrice(){
    this.item='Rice';
    this.price='200';
    this.msg=this.item+ " "+this.price;
   
  }
  clickwheat(){
    this.item='Wheat';
    this.price='300';
    this.msg1=this.item+" "+this.price;
  }
  clickmaize(){
    this.item='Maize';
    this.price='400';
    this.msg2=this.item+" "+this.price
  }
  clickpulses(){
    this.item='Pulses';
    this.price='500';
    this.msg3=this.item+" "+this.price
  } */
  count = 200;
  count1=300;
  count2=400;
  count3=500;

  increment() {
    this.count+=100;
  }

  decrement() {
    this.count-=100;
  }
  increment1() {
    this.count1+=100;
  }

  decrement1() {
    this.count1-=100;
  }
  increment2() {
    this.count2+=100;
  }

  decrement2() {
    this.count2-=100;
  }
  increment3() {
    this.count3+=100;
  }

  decrement3() {
    this.count3-=100;
  }

}
