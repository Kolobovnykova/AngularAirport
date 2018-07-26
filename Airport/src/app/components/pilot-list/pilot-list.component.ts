import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PilotService } from '../../services/pilot.service';
import { Pilot } from '../../services/Models/pilot';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {
  constructor(private pilotService: PilotService,
    private location: Location) { }
  
    pilots: Pilot[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.pilotService.getAll()
      .subscribe(pilots => this.pilots = pilots);
  }

  add(): void {
    
  }

  delete(pilot: Pilot): void {
    this.pilotService.delete(pilot.id)
    .subscribe(this.pilots = this.pilots.splice(pilot.id, 1));
  }

  goBack(): void {
    this.location.back();
  }
}
