import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/Guards/admin.guard';
import { BidderGuard } from 'src/Guards/bidder.guard';
import { FarmerGuard } from 'src/Guards/famrer.guard';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ApplyInsuranceComponent } from './Components/apply-insurance/apply-insurance.component';
import { ApproveBiddersComponent } from './Components/approve-bidders/approve-bidders.component';
import { ApproveClaimsComponent } from './Components/approve-claims/approve-claims.component';
import { ApproveFarmersComponent } from './Components/approve-farmers/approve-farmers.component';
import { BidderHomeComponent } from './Components/bidder-home/bidder-home.component';
import { BidderLoginComponent } from './Components/bidder-login/bidder-login.component';
import { BidderRegistrationComponent } from './Components/bidder-registration/bidder-registration.component';
import { CropSoldHistoryComponent } from './Components/crop-sold-history/crop-sold-history.component';
import { FarmerLoginComponent } from './Components/farmer-login/farmer-login.component';
import { FarmerRegistrationComponent } from './Components/farmer-registration/farmer-registration.component';
import { HomeComponent } from './Components/home/home.component';
import { InsuranceComponent } from './Components/insurance/insurance.component';
import { MarketPlaceComponent } from './Components/market-place/market-place.component';
import { MyBidsComponent } from './Components/my-bids/my-bids.component';
import { SellRequestComponent } from './Components/sell-request/sell-request.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "farmer-login", component: FarmerLoginComponent},
  {path: "bidder-login", component: BidderLoginComponent},
  {path: "farmer-registration", component: FarmerRegistrationComponent},
  {path: "bidder-registration", component: BidderRegistrationComponent},
  {path: "marketplace", component: MarketPlaceComponent,canActivate:[FarmerGuard]},
  {path: "sell-request", component: SellRequestComponent,canActivate:[FarmerGuard]},
  //{path: "insurance", component: InsuranceComponent,canActivate:[FarmerGuard]},
  {path: "crop-sold-history", component: CropSoldHistoryComponent,canActivate:[FarmerGuard]},
  {path: "bidder-home", component: BidderHomeComponent,canActivate:[BidderGuard]},
  {path: "mybids", component: MyBidsComponent,canActivate:[BidderGuard]},
  {path: "admin-login", component: AdminLoginComponent},
  {path: "admin-home", component: AdminHomeComponent,canActivate:[AdminGuard]},
  {path: "approve-farmers", component: ApproveFarmersComponent,canActivate:[AdminGuard]},
  {path: "approve-bidders", component: ApproveBiddersComponent,canActivate:[AdminGuard]},
  {path: "insurance", component: ApplyInsuranceComponent,canActivate:[FarmerGuard]},
  {path: "approve-claim", component: ApproveClaimsComponent,canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
