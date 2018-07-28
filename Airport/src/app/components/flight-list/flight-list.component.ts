import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Flight } from '../../services/Models/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(
    private flightService: FlightService,
    private location: Location
  ) { }
  private router: Router
  flights: Flight[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.flightService.getAll()
      .subscribe(flights => this.flights = flights);
  }

  delete(crew: Flight): void {
    const idToDelete = crew.id;
    this.flightService.delete(idToDelete)
      .subscribe((flightToDelete) => this.flights = this.flights.filter(
        (flight) => flight.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}