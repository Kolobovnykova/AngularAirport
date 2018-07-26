import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../../services/Models/pilot';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PilotService } from '../../services/pilot.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  @Input() pilot: Pilot;
  private id: number;

  constructor(private route: ActivatedRoute,
    private pilotService: PilotService,
    private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getById();
  }

  getById(): void {
    this.pilotService.getById(this.id)
      .subscribe(pilot => this.pilot = pilot);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.pilotService.update(this.id, this.pilot)
      .subscribe(() => this.goBack());
  }

  delete() {
    this.pilotService.delete(this.id)
    .subscribe(() => this.goBack());
  }
}
