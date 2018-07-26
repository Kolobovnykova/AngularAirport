import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PILOTS } from '../services/mock-pilots';
import { Pilot } from './Models/pilot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { httpOptions, localhost } from './constants';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private url = localhost + 'api/pilots/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.url);
  }

  getById(id: number): Observable<Pilot> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Pilot>(idUrl)
  }

  create(pilot: Pilot) {
    this.http.post<Pilot>(this.url, pilot).subscribe();
  }

  update(id: number, pilot: Pilot): Observable<any> {
    let idUrl = `${this.url}${id}`;
    return this.http.put(idUrl, pilot, httpOptions);
  }

  delete(id: number) {
    let idUrl = `${this.url}${id}`;
    this.http.delete(idUrl).subscribe();
  }
}
