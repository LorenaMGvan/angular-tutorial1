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
      { id: 12, name: 'Vicente Guerrero', photo: '/assets/img/12-vicente-guerrero-min.png' },
      { id: 13, name: 'Francisco Javier Mina', photo: '/assets/img/13-francisco-javier-mina-min.jpg' },
      { id: 14, name: 'Nicolás Bravo' , photo: '/assets/img/14-nicolas_bravo-min.jpg'},
      { id: 15, name: 'Juan Aldama', photo: '/assets/img/15-juan-aldama-min.jpeg' },
      { id: 16, name: 'Ignacio Allende Unzaga', photo: '/assets/img/16-ignacio-allende-min.jpeg' },
      { id: 17, name: 'Josefa Ortiz de Domínguez' , photo: '/assets/img/17-josefa-min.jpeg'},
      { id: 18, name: 'José María Morelos y Pavón' , photo: '/assets/img/18-morelos-min.jpg'},
      { id: 19, name: 'Mariano Matamoros' , photo: '/assets/img/19-mariano-min.jpg'},
      { id: 20, name: 'Guadalupe Victoria', photo: '/assets/img/20-guadavic-min.jpeg' }
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
