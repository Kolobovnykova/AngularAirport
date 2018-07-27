import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StewardessService } from '../../services/stewardess.service';
import { Stewardess } from '../../services/Models/stewardess';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {
  constructor(
    private stewardessService: StewardessService,
    private location: Location
  ) { }
  private router: Router
  stewardesses: Stewardess[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.stewardessService.getAll()
      .subscribe(stewardesses => this.stewardesses = stewardesses);
  }

  delete(pilot: Stewardess): void {
    const idToDelete = pilot.id;
    this.stewardessService.delete(idToDelete)
      .subscribe((stewardessToDelete) => this.stewardesses = this.stewardesses.filter(
        (stewardess) => stewardess.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}
