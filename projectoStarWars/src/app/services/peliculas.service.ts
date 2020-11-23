import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PlanetResponse } from '../interface/PlanetResponse';
import { Pelicula } from '../interface/Pelicula';
import { PeliculaResponse } from '../interface/PeliculaResponse';


const authURL = 'https://swapi.dev/api/films/';
  
const requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
       authURL,
       requestOptions
    );
  }

}