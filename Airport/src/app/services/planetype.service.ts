import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, localhost } from './constants';
import { PlaneType } from './Models/planetype';

@Injectable({
  providedIn: 'root'
})
export class PlanetypeService {
  private url = localhost + 'api/planetypes/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PlaneType[]> {
    return this.http.get<PlaneType[]>(this.url);
  }

  getById(id: number): Observable<PlaneType> {
    let idUrl = `${this.url}${id}`;
    return this.http.get<PlaneType>(idUrl);
  }

  create(planetype: PlaneType): Observable<PlaneType> {
    return this.http.post<PlaneType>(this.url, planetype, httpOptions);
  }

  update(id: number, planetype: PlaneType): Observable<PlaneType> {
    let idUrl = `${this.url}${id}`;
    return this.http.put<PlaneType>(idUrl, planetype, httpOptions);
  }

  delete(id: number): Observable<PlaneType> {
    let idUrl = `${this.url}${id}`;
    return this.http.delete<PlaneType>(idUrl, httpOptions);
  }
}
