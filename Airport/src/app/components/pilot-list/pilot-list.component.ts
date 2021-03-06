import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PilotService } from '../../services/pilot.service';
import { Pilot } from '../../services/Models/pilot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  constructor(
    private pilotService: PilotService,
    private location: Location
  ) { }
  private router: Router
  pilots: Pilot[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.pilotService.getAll()
      .subscribe(pilots => this.pilots = pilots);
  }

  delete(pilot: Pilot): void {
    const idToDelete = pilot.id;
    this.pilotService.delete(idToDelete)
      .subscribe((pilotToDelete) => this.pilots = this.pilots.filter(
        (pilot) => pilot.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}