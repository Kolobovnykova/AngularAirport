import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PILOTS } from './mock-pilots';
import { Pilot } from './Models/pilot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  // private url = 'api/pilots';  // URL to web api
  private url = 'http://localhost:52063/api/pilots/';

  constructor(private http: HttpClient) { }

  // getPilots(): Observable<Pilot[]> {
  //   return of(PILOTS);
  // }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.url);
    // .pipe(
    //   catchError(this.handleError('getHeroes', []))
    // );
  }

  // getPilot(id: number): Observable<Pilot> {
  //   return of(PILOTS.find(pilot => pilot.id === id));
  // }
  getPilot(id: number): Observable<Pilot> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Pilot>(idUrl)
  }
}
