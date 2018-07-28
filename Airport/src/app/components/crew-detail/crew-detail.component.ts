import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Crew } from '../../services/Models/crew';
import { CrewService } from '../../services/crew.service';
import { Stewardess } from '../../services/Models/stewardess';
import { StewardessService } from '../../services/stewardess.service';
import { Pilot } from '../../services/Models/pilot';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  @Input() crew: Crew;
  stewardesses: Stewardess[];
  private id: number;
  title: string;
  form: FormGroup;
  groupConfig;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private stewardessService: StewardessService,
    private location: Location,
    private formbuilder: FormBuilder
  ) { }

  
  ngOnInit() {
    this.groupConfig = {
      id: 0,
      firstName: ["", Validators.maxLength(50)],
      lastName: ["", Validators.maxLength(50)],
      dateOfBirth: undefined,
      experience: 0
    }
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getById(this.id);
    } else {
      this.crew = {
        id: 0,
        pilot: undefined,
        stewardesses: []
      }
      this.form = this.formbuilder.group(this.groupConfig);
      this.stewardessService.getAll().subscribe(stews => this.stewardesses = stews);
    }
  }

  getById(id: number): void {
    this.crewService.getById(this.id)
      .subscribe((crew) => {
        this.crew = crew;
        let dp = new DatePipe("en-US");
        let p = 'y-MM-dd';
        let dtr = dp.transform(this.crew.pilot.dateOfBirth, p);
        this.groupConfig = {
          id: crew.id,
          firstName: this.crew.pilot.firstName,
          lastName: this.crew.pilot.lastName,
          dateOfBirth: dtr,
          experience: [this.crew.pilot.experience, Validators.max(50)]
        };
        this.form = this.formbuilder.group(this.groupConfig);

        this.stewardessService.getAll().subscribe(stews => {
          this.stewardesses = stews;
          var crewIds = this.crew.stewardesses.map(a => a.id);
          this.stewardesses = this.stewardesses.filter((stewardess) => !crewIds.includes(stewardess.id))
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    this.crewService.delete(this.id)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    const pilot = { ...this.form.value, dateOfBirth: new Date(this.form.get('dateOfBirth').value) };
    this.crew.pilot = pilot;
    this.crew.stewardesses.forEach(function(item, i, arr) {
      item.id = 0;
    });
    this.crew.pilot.id = 0;

    if (this.id) {
      this.crewService.update(this.id, this.crew).subscribe();
    }
    else {
      this.crewService.create(this.crew).subscribe(() => this.goBack());
    }
  }

  addStew(stew: Stewardess) {
    // remove stew from local array
    let position = this.stewardesses.indexOf(stew);
    if (~position) this.stewardesses.splice(position, 1);

    // add stew to another crew
    stew.crewId = this.crew.id;
    this.crew.stewardesses.push(stew);
  }

  removeStew(stew: Stewardess) {
    let position = this.crew.stewardesses.indexOf(stew);
    if (~position) this.crew.stewardesses.splice(position, 1);

    // temporary id for correct moving stew back to available ones on the view
    stew.crewId = -1;
    this.stewardesses.push(stew);
  }
}
