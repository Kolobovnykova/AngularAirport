import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../../services/Models/pilot';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PilotService } from '../../services/pilot.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


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
     // debugger;
      // this.getById();
      // this.groupConfig = {
      //   id: this.pilot.id,
      //   firstName: [this.pilot.firstName, Validators.maxLength(50)],
      //   lastName: [this.pilot.lastName, Validators.maxLength(50)],
      //   dateOfBirth: this.pilot.dateOfBirth,
      //   experience: [this.pilot.experience, Validators.maxLength(50)]
      // }
      this.pilotService.getById(this.id)
      .subscribe((pilot) => {
        this.pilot = pilot;
        this.groupConfig = {
          id: pilot.id,
          firstName: [this.pilot.firstName, Validators.maxLength(50)],
          lastName: [this.pilot.lastName, Validators.maxLength(50)],
          dateOfBirth: this.pilot.dateOfBirth,
          experience: [this.pilot.experience, Validators.max(50)]
        };
      });
    } else {
      this.pilot = {
        id: 0,
        firstName: "",
        lastName: "",
        dateOfBirth: undefined,
        experience: 0
      }
    }

    this.form = this.formbuilder.group(this.groupConfig);
  }

  getById(): void {
    this.pilotService.getById(this.id)
      .subscribe((pilot) => {
        this.pilot = pilot;
        this.groupConfig = {
          id: this.pilot.id,
          firstName: [this.pilot.firstName, Validators.maxLength(50)],
          lastName: [this.pilot.lastName, Validators.maxLength(50)],
          dateOfBirth: this.pilot.dateOfBirth,
          experience: [this.pilot.experience, Validators.maxLength(50)]
        };
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // let result,
    //   pilotValue = this.form.value;
    // if (pilotValue.id) {
    //   result = this.pilotService.update(pilotValue.id, pilotValue);
    // } else {
    //   result = this.pilotService.create(pilotValue);
    // }
    // result.subscribe(() => this.goBack());
    // // .subscribe(p => this.router.navigate(['pilots']));

    this.pilotService.update(this.id, this.pilot)
      .subscribe(() => this.goBack());
  }

  delete() {
    this.pilotService.delete(this.id)
      .subscribe(() => this.goBack());
  }
}
