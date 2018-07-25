import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PilotListComponent } from './controllers-module/pilot-list/pilot-list.component';
import { PilotDetailComponent } from './controllers-module/pilot-detail/pilot-detail.component';
import { HomeComponent } from './controllers-module/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PilotListComponent,
    PilotDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
