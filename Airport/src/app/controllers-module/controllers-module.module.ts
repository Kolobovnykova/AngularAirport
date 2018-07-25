import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PilotListComponent, PilotDetailComponent, HomeComponent]
})
export class ControllersModuleModule { }
