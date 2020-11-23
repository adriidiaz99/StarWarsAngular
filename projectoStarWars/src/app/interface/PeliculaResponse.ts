import { Pelicula } from './Pelicula';
 
export interface PeliculaResponse {
    count: number;
    next: string;
    previous?: any;
    results: Pelicula[];
}