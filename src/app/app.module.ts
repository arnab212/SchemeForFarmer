import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './Components/farmer-registration/farmer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { FarmerLoginComponent } from './Components/farmer-login/farmer-login.component';
import { MarketPlaceComponent } from './Components/market-place/market-place.component';
import { BidderLoginComponent } from './Components/bidder-login/bidder-login.component';
import { BidderRegistrationComponent } from './Components/bidder-registration/bidder-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    HomeComponent,
    FarmerLoginComponent,
    MarketPlaceComponent,
    BidderLoginComponent,
    BidderRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
