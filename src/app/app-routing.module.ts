import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderLoginComponent } from './Components/bidder-login/bidder-login.component';
import { FarmerLoginComponent } from './Components/farmer-login/farmer-login.component';
import { FarmerRegistrationComponent } from './Components/farmer-registration/farmer-registration.component';
import { HomeComponent } from './Components/home/home.component';
import { MarketPlaceComponent } from './Components/market-place/market-place.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "farmer-login", component: FarmerLoginComponent},
  {path: "bidder-login", component: BidderLoginComponent},
  {path: "farmer-registration", component: FarmerRegistrationComponent},
  {path: "marketplace", component: MarketPlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
