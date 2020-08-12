import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { HomeFeaturesComponent } from './pages/home/home-features/home-features.component';
import { HomeFeaturesItemComponent } from './pages/home/home-features/home-features-item/home-features-item.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { HomePriceComponent } from './pages/home/home-price/home-price.component';
import { HomeUsersComponent } from './pages/home/home-users/home-users.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    HomeFeaturesComponent,
    HomeFeaturesItemComponent,
    HomeServicesComponent,
    HomePriceComponent,
    HomeUsersComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
