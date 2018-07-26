import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, PilotListComponent, PilotDetailComponent]
})
export class ComponentsModule { }
