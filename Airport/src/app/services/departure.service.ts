import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Departure } from './Models/departure';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {
  private url = localhost + 'api/departures/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departure[]> {
    return this.http.get<Departure[]>(this.url);
  }

  getById(id: number): Observable<Departure> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Departure>(idUrl);
  }

  create(departure: Departure): Observable<Departure> {
    return this.http.post<Departure>(this.url, departure, httpOptions);
  }

  update(id: number, departure: Departure): Observable<Departure> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Departure>(idUrl, departure, httpOptions);
  }

  delete(id: number): Observable<Departure> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Departure>(idUrl, httpOptions);
  }
}