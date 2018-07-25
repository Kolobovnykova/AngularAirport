import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Pilot } from '../../services-module/Models/pilot';
import { PilotService } from '../../services-module/pilot.service';


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
    this.getPilots();
  }

  getPilots(): void {
    this.pilotService.getPilots()
      .subscribe(pilots => this.pilots = pilots);
  }

  goBack(): void {
    this.location.back();
  }
}
