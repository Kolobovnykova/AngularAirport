import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Flight } from './Models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = localhost + 'api/flights/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.url);
  }

  getById(id: number): Observable<Flight> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Flight>(idUrl);
  }

  create(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.url, flight, httpOptions);
  }

  update(id: number, flight: Flight): Observable<Flight> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Flight>(idUrl, flight, httpOptions);
  }

  delete(id: number): Observable<Flight> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Flight>(idUrl, httpOptions);
  }
}