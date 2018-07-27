import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Crew } from './Models/crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private url = localhost + 'api/crews/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.url);
  }

  getById(id: number): Observable<Crew> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Crew>(idUrl);
  }

  create(crew: Crew): Observable<Crew> {
    return this.http.post<Crew>(this.url, crew, httpOptions);
  }

  update(id: number, crew: Crew): Observable<Crew> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Crew>(idUrl, crew, httpOptions);
  }

  delete(id: number): Observable<Crew> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Crew>(idUrl, httpOptions);
  }
}
