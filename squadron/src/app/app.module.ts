import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { TipsComponent } from './tips/tips.component';
import { PhoneComponent } from './phone/phone.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DemoComponent,
    TipsComponent,
    PhoneComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
