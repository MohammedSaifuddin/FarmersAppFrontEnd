import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from  './angular.material.module';
import { RegistrationForLoginComponent } from './registration-for-login/registration-for-login.component';
import { BuyersComponent } from './buyers/buyers.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserServiceService } from './user-service.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { Pipe, PipeTransform } from '@angular/core';
import { BuyerProductDetailsComponent } from '../buyer-product-details/buyer-product-details.component';
import { FarmerFormDetailsComponent } from '../farmer-form-details/farmer-form-details.component';
import { SingleCropComponent } from './single-crop/single-crop.component';
import { PostComplaintsPageComponent } from './post-complaints-page/post-complaints-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { PostFarmingTipsComponent } from './post-farming-tips/post-farming-tips.component';
import { FarmingTipsComponent } from './farming-tips/farming-tips.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { FarmerCropRequiementsComponent } from './farmer-crop-requiements/farmer-crop-requiements.component';
import { SingleRequiredCropComponent } from './single-required-crop/single-required-crop.component';
import { SupplierNavBarComponent } from './supplier-nav-bar/supplier-nav-bar.component';
import { BuyerNavBarComponent } from './buyer-nav-bar/buyer-nav-bar.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    RegistrationForLoginComponent,
    BuyersComponent,
    LandingPageComponent,
    BuyerProductDetailsComponent,
    FarmerFormDetailsComponent,
    SingleCropComponent,
    PostComplaintsPageComponent,
    AdminPageComponent,
    ComplaintStatusComponent,
    PostFarmingTipsComponent,
    FarmingTipsComponent,
    BuyerFormComponent,
    FarmerCropRequiementsComponent,
    SingleRequiredCropComponent,
    SupplierNavBarComponent,
    BuyerNavBarComponent,
    AdminNavBarComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthService,AuthGuard,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
