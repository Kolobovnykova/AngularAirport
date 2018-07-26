import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PilotDetailComponent } from '../components/pilot-detail/pilot-detail.component';
import { PilotListComponent } from '../components/pilot-list/pilot-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pilots', component: PilotListComponent },
  { path: 'pilots/:id', component: PilotDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
