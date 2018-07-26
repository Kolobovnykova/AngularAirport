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
    private location: Location) {  }

  pilots: Pilot[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.pilotService.getAll()
      .subscribe(pilots => this.pilots = pilots);
  }

  add(pilot: Pilot): void {
    this.pilotService.create(pilot)
      .subscribe(res => {
        this.pilots.push(res);
      }), err => console.log("Error Occured " + err);
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

  submitted = false;
 
  onSubmit() { this.submitted = true; }
}
