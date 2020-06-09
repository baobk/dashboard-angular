import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing } from "./app-routing.module";

import {DashboardService} from './service/dashboard.service';
import {HttpModule} from '@angular/http';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardInfoComponent,
    NavBarComponent,
    PaginationComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing
  ],
  providers: [DashboardService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
