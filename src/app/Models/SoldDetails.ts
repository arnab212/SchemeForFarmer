import { DatePipe } from "@angular/common";

export interface SoldDetails
{
   requestId:number;
   aadharCardNumber:string ;
   dateSold: DatePipe;
   soldPrice: number;
   totalPrice:number;
}