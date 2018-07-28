import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { DepartureService } from '../../services/departure.service';
import { Departure } from '../../services/Models/departure';
import { CrewService } from '../../services/crew.service';
import { FlightService } from '../../services/flight.service';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  @Input() departure: Departure;
  private id: number;
  title: string;
  form: FormGroup;
  groupConfig;

  constructor(
    private route: ActivatedRoute,
    private departureService: DepartureService,
    private location: Location,
    private formbuilder: FormBuilder,
    private crewService: CrewService,
    private flightService: FlightService,
    private planeService: PlaneService
  ) { }

  ngOnInit() {
    this.groupConfig = {
      id: 0,
      flightId: [0, Validators.min(1)],
      crewId: [0, Validators.min(1)],
      dateOfDeparture: undefined,
      planeId: [0, Validators.min(1)],
    }
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getById(this.id);
    } else {
      this.departure = {
        id: 0,
        flight: undefined,
        crew: undefined,
        dateOfDeparture: undefined,
        plane: undefined
      }
      this.form = this.formbuilder.group(this.groupConfig);
    }

    this.form = this.formbuilder.group(this.groupConfig);
  }

  getById(id: number): void {
    this.departureService.getById(this.id)
      .subscribe((departure) => {
        this.departure = departure;
        let dp = new DatePipe("en-US");
        let p = 'y-MM-dd';
        let dtr = dp.transform(departure.dateOfDeparture, p);
        this.groupConfig = {
          id: departure.id,
          flightId: [this.departure.flight.id, Validators.min(1)],
          crewId: [this.departure.crew.id, Validators.min(1)],
          dateOfDeparture: dtr,
          planeId: [this.departure.plane.id, Validators.min(1)]
        };
        this.form = this.formbuilder.group(this.groupConfig);
      });
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    this.departureService.delete(this.id)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    const departure = { ...this.form.value, dateOfBirth: new Date(this.form.get('dateOfDeparture').value) };
    this.departure.dateOfDeparture = departure.dateOfDeparture;
    const flightId = departure.flightId;
    const crewId = departure.crewId;
    const planeId = departure.planeId;
    var newFlight, newCrew, newPlane;
    this.flightService.getById(flightId).subscribe(
      (flight) => {
        newFlight = flight;
        newFlight.id = 0;
        newFlight.tickets.forEach(function (item, i, arr) {
          item.id = 0;
        });
        this.crewService.getById(crewId).subscribe(
          (crew) => {
            newCrew = crew;
            newCrew.id = 0;
            newCrew.pilot.id = 0;
            newCrew.stewardesses.forEach(function (item, i, arr) {
              item.id = 0;
            });
            this.planeService.getById(planeId).subscribe(
              (plane) => {
                newPlane = plane;
                newPlane.id = 0;
                newPlane.planeType.id = 0;
                this.departure.flight = newFlight;
                this.departure.crew = newCrew;
                this.departure.plane = newPlane;

                if (this.id) {
                  this.departureService.update(this.id, this.departure).subscribe();
                }
                else {
                  this.departureService.create(this.departure).subscribe(() => this.goBack());
                }
              }
            );
          }
        );
      }
    );

    // if (this.id) {
    //   this.departureService.update(this.id, this.departure).subscribe();
    // }
    // else {
    //   this.departureService.create(this.departure).subscribe(() => this.goBack());
    // }
  }
}
