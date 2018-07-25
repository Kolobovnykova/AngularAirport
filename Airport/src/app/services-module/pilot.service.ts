import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PILOTS } from './mock-pilots';
import { Pilot } from './Models/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor() { }

  getPilots(): Observable<Pilot[]> {
    return of(PILOTS);
  }
 
  getPilot(id: number): Observable<Pilot> {
    return of(PILOTS.find(pilot => pilot.id === id));
  }
}
