import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DepartureService } from '../../services/departure.service';
import { Departure } from '../../services/Models/departure';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  constructor(
    private departureService: DepartureService,
    private location: Location
  ) { }
  private router: Router
  departures: Departure[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.departureService.getAll()
      .subscribe(pilots => this.departures = pilots);
  }

  delete(departure: Departure): void {
    const idToDelete = departure.id;
    this.departureService.delete(idToDelete)
      .subscribe((departureToDelete) => this.departures = this.departures.filter(
        (departure) => departure.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}