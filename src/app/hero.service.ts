import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService: MessageService) { }

  getHeroes(): Observable <Hero[]> {
    // mandar un mensaje cuando se busquen los hérores
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES); // devuelve un observable <Hero[]> que emite un valor único, "el conjunto de héroes simulados"
  }

}
