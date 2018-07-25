import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pilot } from '../../services-module/Models/pilot';
import { PilotService } from '../../services-module/pilot.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  @Input() pilot: Pilot;

  constructor(private route: ActivatedRoute,
    private pilotService: PilotService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pilotService.getPilot(id)
      .subscribe(hero => this.pilot = hero);
  }

  goBack(): void {
    this.location.back();
  }

}