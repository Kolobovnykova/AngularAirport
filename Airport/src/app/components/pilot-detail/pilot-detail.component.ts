import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../../services/Models/pilot';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PilotService } from '../../services/pilot.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  @Input() pilot: Pilot;
  private id: number;
  title: string;
  form: FormGroup;
  groupConfig;

  constructor(
    private route: ActivatedRoute,
    private pilotService: PilotService,
    private location: Location,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.groupConfig = {
      id: 0,
      firstName: ["", Validators.maxLength(50)],
      lastName: ["", Validators.maxLength(50)],
      dateOfBirth: undefined,
      experience: [0, Validators.max(50)]
    }
    this.id = +this.route.snapshot.paramMap.get('id');


    if (this.id) {
      this.getById(this.id);
    } else {
      this.pilot = {
        id: 0,
        firstName: "",
        lastName: "",
        dateOfBirth: undefined,
        experience: 0
      }
      this.form = this.formbuilder.group(this.groupConfig);
    }

    this.form = this.formbuilder.group(this.groupConfig);
  }

  getById(id: number): void {
    this.pilotService.getById(this.id)
      .subscribe((pilot) => {
        this.pilot = pilot;
        let dp = new DatePipe("en-US");
        let p = 'y-MM-dd';
        let dtr = dp.transform(pilot.dateOfBirth, p);
        this.groupConfig = {
          id: pilot.id,
          firstName: [this.pilot.firstName, Validators.maxLength(50)],
          lastName: [this.pilot.lastName, Validators.maxLength(50)],
          dateOfBirth: dtr,
          experience: [this.pilot.experience, Validators.max(50)]
        };
        this.form = this.formbuilder.group(this.groupConfig);
      });
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

  onSubmit() {
    const pilot = { ...this.form.value, dateOfBirth: new Date(this.form.get('dateOfBirth').value) };
    if (this.id) {
      this.pilotService.update(this.id, pilot).subscribe();
    }
    else {
      this.pilotService.create(pilot).subscribe(() => this.goBack());
    }
  }
}
