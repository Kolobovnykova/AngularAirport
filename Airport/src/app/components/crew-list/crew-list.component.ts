import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { Crew } from '../../services/Models/crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  constructor(
    private crewService: CrewService,
    private location: Location
  ) { }
  private router: Router
  crews: Crew[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.crewService.getAll()
      .subscribe(crews => this.crews = crews);
  }

  delete(crew: Crew): void {
    const idToDelete = crew.id;
    this.crewService.delete(idToDelete)
      .subscribe((crewToDelete) => this.crews = this.crews.filter(
        (crew) => crew.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}