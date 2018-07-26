import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';
import { StewardessDetailComponent } from './stewardess-detail/stewardess-detail.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { DepartureDetailComponent } from './departure-detail/departure-detail.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { PlaneDetailComponent } from './plane-detail/plane-detail.component';
import { PlanetypeListComponent } from './planetype-list/planetype-list.component';
import { PlanetypeDetailComponent } from './planetype-detail/planetype-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, PilotListComponent, PilotDetailComponent, CrewListComponent, CrewDetailComponent, StewardessDetailComponent, StewardessListComponent, FlightListComponent, FlightDetailComponent, TicketListComponent, TicketDetailComponent, DepartureListComponent, DepartureDetailComponent, PlaneListComponent, PlaneDetailComponent, PlanetypeListComponent, PlanetypeDetailComponent]
})
export class ComponentsModule { }
