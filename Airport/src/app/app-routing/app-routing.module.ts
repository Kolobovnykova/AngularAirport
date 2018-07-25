import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PilotListComponent } from '../controllers-module/pilot-list/pilot-list.component';
import { PilotDetailComponent } from '../controllers-module/pilot-detail/pilot-detail.component';
import { HomeComponent } from '../controllers-module/home/home.component';

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
