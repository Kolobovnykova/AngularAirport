import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from './pilot.service';
import { CrewService } from './crew.service';
import { StewardessService } from './stewardess.service';
import { PlaneService } from './plane.service';
import { PlanetypeService } from './planetype.service';
import { TicketService } from './ticket.service';
import { FlightService } from './flight.service';
import { DepartureService } from './departure.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  ],
  providers: [
    PilotService,
    CrewService,
    StewardessService,
    PlaneService,
    PlanetypeService,
    TicketService,
    FlightService,
    DepartureService
  ]
})
export class ServicesModule { }
