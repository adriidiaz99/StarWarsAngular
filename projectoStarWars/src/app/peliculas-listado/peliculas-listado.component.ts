import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/Pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {

  listadoPeliculas: Pelicula[] = [];
  columnsToDisplay = ["name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
    "residents: ",
    "films: ",
    "created",
    "edited",
    "url"];

  constructor(private planetService: PeliculasService) {

   }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
       this.listadoPeliculas = resp.results;
    });
 }


}
