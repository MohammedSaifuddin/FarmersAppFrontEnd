import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationForLoginComponent } from './registration-for-login/registration-for-login.component';
import { BuyersComponent } from './buyers/buyers.component';
import { BuyerProductDetailsComponent } from 'src/buyer-product-details/buyer-product-details.component';
import { FarmerFormDetailsComponent } from 'src/farmer-form-details/farmer-form-details.component';
import { SingleCropComponent } from './single-crop/single-crop.component';
import { PostComplaintsPageComponent } from './post-complaints-page/post-complaints-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { PostFarmingTipsComponent } from './post-farming-tips/post-farming-tips.component';
import { FarmingTipsComponent } from './farming-tips/farming-tips.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { FarmerCropRequiementsComponent } from './farmer-crop-requiements/farmer-crop-requiements.component';
import { SingleRequiredCropComponent } from './single-required-crop/single-required-crop.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
   { path: '', redirectTo: '/home', pathMatch: 'full' , canActivate: [AuthGuard]},
{ path: 'home', component: HomePageComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationForLoginComponent },
// { path: 'buyers', component: BuyersComponent },

//############################################################
//Suppplier
{ path: 'farmer', component: FarmerFormDetailsComponent , canActivate: [AuthGuard]},//
{ path: 'post_complaints', component: PostComplaintsPageComponent , canActivate: [AuthGuard] },//
{ path: 'complaint_status', component: ComplaintStatusComponent , canActivate: [AuthGuard] },//
{ path: 'farming_tips', component: FarmingTipsComponent , canActivate: [AuthGuard] },//

{ path: 'single_buyer/:id', component: SingleRequiredCropComponent , canActivate: [AuthGuard] },
{ path: 'required_crops', component: FarmerCropRequiementsComponent , canActivate: [AuthGuard] },

//############################################################
//Admin
{ path: 'admin_page', component: AdminPageComponent },//
{ path: 'post_farming_tips', component: PostFarmingTipsComponent },//

//############################################################
//Buyer
{ path: 'crops', component: BuyerProductDetailsComponent , canActivate: [AuthGuard] },
{ path: 'buyer_form', component: BuyerFormComponent  , canActivate: [AuthGuard]},
{ path: 'single/:id', component: SingleCropComponent , canActivate: [AuthGuard] },



{ path: 'test', component: BuyersComponent },//

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
 export const routingComponents = [LoginComponent,HomePageComponent]