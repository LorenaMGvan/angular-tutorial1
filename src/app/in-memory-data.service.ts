import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const heroes = [
      { id: 12, name: 'Vicente Guerrero  ' },
      { id: 13, name: 'Francisco Javier Mina' },
      { id: 14, name: 'Nicolás Bravo' },
      { id: 15, name: 'Juan Aldama' },
      { id: 16, name: 'Ignacio Allende Unzaga' },
      { id: 17, name: 'Josefa Ortiz de Domínguez' },
      { id: 18, name: 'José María Morelos y Pavón' },
      { id: 19, name: 'Mariano Matamoros' },
      { id: 20, name: 'Guadalupe Victoria' }
    ];

    return {heroes};
  }

  // Anula el método genId para garantizar que un héroe siempre tenga una identificación.
  // Si la matriz de héroes está vacía,
  // el método siguiente devuelve el número inicial (11).
  // si la matriz de héroes no está vacía, el método siguiente devuelve el valor más alto
  // ID de héroe + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
