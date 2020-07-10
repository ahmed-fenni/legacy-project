import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { BookdetailsComponent } from "./bookdetails/bookdetails.component";
import { LoginComponent } from "./login/login.component";

import {SearchComponent} from './search/app/search/search.component' 




const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "register", component: SignupComponent },
  { path: "bookdetails", component: BookdetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'search',  component: SearchComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    HttpClientModule,
  ],
  exports: [],
})
export class AppRoutingModule {}
