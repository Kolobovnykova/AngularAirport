import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Ticket } from './Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = localhost + 'api/tickets/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url);
  }

  getById(id: number): Observable<Ticket> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Ticket>(idUrl);
  }

  create(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.url, ticket, httpOptions);
  }

  update(id: number, ticket: Ticket): Observable<Ticket> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Ticket>(idUrl, ticket, httpOptions);
  }

  delete(id: number): Observable<Ticket> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Ticket>(idUrl, httpOptions);
  }
}