import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PlanetResponse } from '../interface/PlanetResponse';
import { Planet } from '../interface/Planet';


const authURL = 'https://swapi.dev/api/planets/';
  
const requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
       authURL,
       requestOptions
    );
  }

}

