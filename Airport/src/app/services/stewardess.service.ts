import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Stewardess } from './Models/stewardess';

@Injectable({
  providedIn: 'root'
})
export class StewardessService {
  private url = localhost + 'api/stewardesses/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Stewardess[]> {
    return this.http.get<Stewardess[]>(this.url);
  }

  getById(id: number): Observable<Stewardess> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Stewardess>(idUrl);
  }

  create(stewardess: Stewardess): Observable<Stewardess> {
    return this.http.post<Stewardess>(this.url, stewardess, httpOptions);
  }

  update(id: number, stewardess: Stewardess): Observable<Stewardess> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Stewardess>(idUrl, stewardess, httpOptions);
  }

  delete(id: number): Observable<Stewardess> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Stewardess>(idUrl, httpOptions);
  }
}
