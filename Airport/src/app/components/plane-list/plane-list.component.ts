import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PlaneService } from '../../services/plane.service';
import { Plane } from '../../services/Models/plane';


@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  constructor(
    private planeService: PlaneService,
    private location: Location
  ) { }
  private router: Router
  planes: Plane[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.planeService.getAll()
      .subscribe(planes => this.planes = planes);
  }

  delete(plane: Plane): void {
    const idToDelete = plane.id;
    this.planeService.delete(idToDelete)
      .subscribe((planeToDelete) => this.planes = this.planes.filter(
        (plane) => plane.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}