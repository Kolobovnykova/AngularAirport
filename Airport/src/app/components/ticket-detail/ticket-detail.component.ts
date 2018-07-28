import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Ticket } from '../../services/Models/ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @Input() ticket: Ticket;
  private id: number;
  title: string;
  form: FormGroup;
  groupConfig;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.groupConfig = {
      id: 0,
      flightId: [0, Validators.min (1)],
      price: [0, Validators.min (1)]
    }
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getById(this.id);
    } else {
      this.ticket = {
        id: 0,
        flightId: 0,
        price: 0
      }
      this.form = this.formbuilder.group(this.groupConfig);
    }

    this.form = this.formbuilder.group(this.groupConfig);
  }

  getById(id: number): void {
    this.ticketService.getById(this.id)
      .subscribe((ticket) => {
        this.ticket = ticket;
        this.groupConfig = {
          id: ticket.id,
          flightId: [this.ticket.flightId, Validators.min(1)],
          price: [this.ticket.price, Validators.min(1)],
        };
        this.form = this.formbuilder.group(this.groupConfig);
      });
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    this.ticketService.delete(this.id)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    const ticket = { ...this.form.value};
    if (this.id) {
      this.ticketService.update(this.id, ticket).subscribe();
    }
    else {
      this.ticketService.create(ticket).subscribe(() => this.goBack());
    }
  }
}
