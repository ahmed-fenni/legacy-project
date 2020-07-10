
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./home/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { HttpModule } from '@angular/http';


import { DashComponent } from './profile/dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { BookdetailsComponent } from "./bookdetails/bookdetails.component";
import { HttpClientModule } from "@angular/common/http";

import {GoogleBookApiService } from './search/app/google-book-api.service'
import {SearchComponent} from './search/app/search/search.component'
// import { AppRouting } from "./search/app/app.routing";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    FooterComponent,
    LoginComponent,
    DashComponent,
    BookdetailsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    HttpModule,
    // AppRouting
  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
