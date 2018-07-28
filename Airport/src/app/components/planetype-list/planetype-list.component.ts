import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PlanetypeService } from '../../services/planetype.service';
import { PlaneType } from '../../services/Models/planetype';

@Component({
  selector: 'app-planetype-list',
  templateUrl: './planetype-list.component.html',
  styleUrls: ['./planetype-list.component.css']
})
export class PlanetypeListComponent implements OnInit {

  constructor(
    private planeTypeService: PlanetypeService,
    private location: Location
  ) { }
  private router: Router
  planetypes: PlaneType[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.planeTypeService.getAll()
      .subscribe(planetypes => this.planetypes = planetypes);
  }

  delete(planetype: PlaneType): void {
    const idToDelete = planetype.id;
    this.planeTypeService.delete(idToDelete)
      .subscribe((planetypeToDelete) => this.planetypes = this.planetypes.filter(
        (pilot) => pilot.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}