import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable , of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable <Hero[]> {
    return of (HEROES); // devuelve un observable <Hero[]> que emite un valor único, "el conjunto de héroes simulados"
  }

}
