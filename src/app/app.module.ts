import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './Components/farmer-registration/farmer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { FarmerLoginComponent } from './Components/farmer-login/farmer-login.component';
import { BidderLoginComponent } from './Components/bidder-login/bidder-login.component';
import { BidderRegistrationComponent } from './Components/bidder-registration/bidder-registration.component';
import { MarketPlaceComponent } from './Components/market-place/market-place.component';
import { RouterModule, Routes } from '@angular/router';
import { SellRequestComponent } from './Components/sell-request/sell-request.component';
import { InsuranceComponent } from './Components/insurance/insurance.component';
import { CropSoldHistoryComponent } from './Components/crop-sold-history/crop-sold-history.component';
import { BidderHomeComponent } from './Components/bidder-home/bidder-home.component';
import { MyBidsComponent } from './Components/my-bids/my-bids.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ApproveBiddersComponent } from './Components/approve-bidders/approve-bidders.component';
import { ApproveFarmersComponent } from './Components/approve-farmers/approve-farmers.component';
import { ApplyInsuranceComponent } from './Components/apply-insurance/apply-insurance.component';
import { ClaimInsuranceComponent } from './Components/claim-insurance/claim-insurance.component';
import { ApproveClaimsComponent } from './Components/approve-claims/approve-claims.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    HomeComponent,
    FarmerLoginComponent,
    MarketPlaceComponent,
    BidderLoginComponent,
    BidderRegistrationComponent,
    SellRequestComponent,
    InsuranceComponent,
    CropSoldHistoryComponent,
    BidderHomeComponent,
    MyBidsComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    ApproveBiddersComponent,
    ApproveFarmersComponent,
    ApplyInsuranceComponent,
    ClaimInsuranceComponent,
    ApproveClaimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
