import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Stewardess } from '../../services/Models/stewardess';
import { StewardessService } from '../../services/stewardess.service';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  @Input() stewardess: Stewardess;
  private id: number;
  title: string;
  form: FormGroup;
  groupConfig;

  constructor(
    private route: ActivatedRoute,
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
      crewId: [0, Validators.min(1)]
    }
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getById(this.id);
    } else {
      this.stewardess = {
        id: 0,
        firstName: "",
        lastName: "",
        dateOfBirth: undefined,
        crewId: 0
      }
      this.form = this.formbuilder.group(this.groupConfig);
    }

    this.form = this.formbuilder.group(this.groupConfig);
  }

  getById(id: number): void {
    this.stewardessService.getById(this.id)
      .subscribe((stewardess) => {
        this.stewardess = stewardess;
        let dp = new DatePipe("en-US");
        let p = 'y-MM-dd';
        let dtr = dp.transform(stewardess.dateOfBirth, p);
        this.groupConfig = {
          id: stewardess.id,
          firstName: [this.stewardess.firstName, Validators.maxLength(50)],
          lastName: [this.stewardess.lastName, Validators.maxLength(50)],
          dateOfBirth: dtr,
          crewId: this.stewardess.crewId
        };
        this.form = this.formbuilder.group(this.groupConfig);
      });
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    this.stewardessService.delete(this.id)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    const stewardess = { ...this.form.value, dateOfBirth: new Date(this.form.get('dateOfBirth').value) };
    if (this.id) {
      this.stewardessService.update(this.id, stewardess).subscribe(() => this.goBack());
    }
    else {
      this.stewardessService.create(stewardess).subscribe(() => this.goBack());
    }
  }
}
