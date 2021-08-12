import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderHomeComponent } from './Components/bidder-home/bidder-home.component';
import { BidderLoginComponent } from './Components/bidder-login/bidder-login.component';
import { BidderRegistrationComponent } from './Components/bidder-registration/bidder-registration.component';
import { CropSoldHistoryComponent } from './Components/crop-sold-history/crop-sold-history.component';
import { FarmerLoginComponent } from './Components/farmer-login/farmer-login.component';
import { FarmerRegistrationComponent } from './Components/farmer-registration/farmer-registration.component';
import { HomeComponent } from './Components/home/home.component';
import { InsuranceComponent } from './Components/insurance/insurance.component';
import { MarketPlaceComponent } from './Components/market-place/market-place.component';
import { SellRequestComponent } from './Components/sell-request/sell-request.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "farmer-login", component: FarmerLoginComponent},
  {path: "bidder-login", component: BidderLoginComponent},
  {path: "farmer-registration", component: FarmerRegistrationComponent},
  {path: "bidder-registration", component: BidderRegistrationComponent},
  {path: "marketplace", component: MarketPlaceComponent},
  {path: "sell-request", component: SellRequestComponent},
  {path: "insurance", component: InsuranceComponent},
  {path: "crop-sold-history", component: CropSoldHistoryComponent},
  {path: "bidder-home", component: BidderHomeComponent},
  {path: "crop-sold-history", component: CropSoldHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
