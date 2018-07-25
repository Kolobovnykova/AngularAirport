import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PilotListComponent, PilotDetailComponent]
})
export class ControllersModuleModule { }
