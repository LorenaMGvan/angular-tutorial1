import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]> | undefined;
  private searchTerms = new Subject<string>();

  // Un subject es tanto una fuente de valores  observables com un Observable+ en si mismo
  // se puede suscribir a un subject, asi como lo haria con cualquier observable
  // se pueden insertar valores en ese observable ,llamando al metodo next(value)

  constructor(private heroService: HeroService) { }

  // Inserta un término de búsqueda en la secuencia observable.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // espere 300ms después de cada pulsación de tecla antes de considerar el término
      debounceTime(300),

      // ignora el término nuevo si es el mismo que el término anterior
      distinctUntilChanged(),

      // cambia a una nueva búsqueda observable cada vez que cambia el término
      switchMap((term: string) => this.heroService.searchHeroes(term)),

    );
  }

}
