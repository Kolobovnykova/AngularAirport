import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PilotDetailComponent } from '../components/pilot-detail/pilot-detail.component';
import { PilotListComponent } from '../components/pilot-list/pilot-list.component';
import { StewardessListComponent } from '../components/stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from '../components/stewardess-detail/stewardess-detail.component';
import { CrewListComponent } from '../components/crew-list/crew-list.component';
import { CrewDetailComponent } from '../components/crew-detail/crew-detail.component';
import { FlightListComponent } from '../components/flight-list/flight-list.component';
import { FlightDetailComponent } from '../components/flight-detail/flight-detail.component';
import { TicketListComponent } from '../components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from '../components/ticket-detail/ticket-detail.component';
import { DepartureListComponent } from '../components/departure-list/departure-list.component';
import { DepartureDetailComponent } from '../components/departure-detail/departure-detail.component';
import { PlaneListComponent } from '../components/plane-list/plane-list.component';
import { PlaneDetailComponent } from '../components/plane-detail/plane-detail.component';
import { PlanetypeListComponent } from '../components/planetype-list/planetype-list.component';
import { PlanetypeDetailComponent } from '../components/planetype-detail/planetype-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pilots', component: PilotListComponent },
  { path: 'pilots/:id', component: PilotDetailComponent },
  { path: 'stewardesses', component: StewardessListComponent },
  { path: 'stewardesses/:id', component: StewardessDetailComponent },
  { path: 'crews', component: CrewListComponent },
  { path: 'crews/:id', component: CrewDetailComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'flights/:id', component: FlightDetailComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: TicketDetailComponent },
  { path: 'departures', component: DepartureListComponent },
  { path: 'departures/:id', component: DepartureDetailComponent },
  { path: 'planes', component: PlaneListComponent },
  { path: 'planes/:id', component: PlaneDetailComponent },
  { path: 'planetypes', component: PlanetypeListComponent },
  { path: 'planetypes/:id', component: PlanetypeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
