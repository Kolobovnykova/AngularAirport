import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../services/Models/ticket';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
    private location: Location
  ) { }
  private router: Router
  tickets: Ticket[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.ticketService.getAll()
      .subscribe(pilots => this.tickets = pilots);
  }

  delete(ticket: Ticket): void {
    const idToDelete = ticket.id;
    this.ticketService.delete(idToDelete)
      .subscribe((ticketToDelete) => this.tickets = this.tickets.filter(
        (ticket) => ticket.id !== idToDelete));
  }

  goBack(): void {
    this.location.back();
  }
}