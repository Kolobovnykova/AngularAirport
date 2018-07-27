import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { Plane } from './Models/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  private url = localhost + 'api/planes/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Plane[]> {
    return this.http.get<Plane[]>(this.url);
  }

  getById(id: number): Observable<Plane> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<Plane>(idUrl);
  }

  create(plane: Plane): Observable<Plane> {
    return this.http.post<Plane>(this.url, plane, httpOptions);
  }

  update(id: number, plane: Plane): Observable<Plane> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<Plane>(idUrl, plane, httpOptions);
  }

  delete(id: number): Observable<Plane> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<Plane>(idUrl, httpOptions);
  }
}