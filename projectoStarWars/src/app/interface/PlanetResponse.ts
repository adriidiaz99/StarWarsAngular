import { Planet } from './Planet';
 
export interface PlanetResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
