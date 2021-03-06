import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( 
    private http:HttpClient,
    private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }

  private handleError<T>(operation = 'opertion', result?:T) {
    return (error: any): Observable<T> => {
      // TODO: envía el error a la infraestructura de registro remoto
      console.error(error);

    // TODO: mejor trabajo de transformación del error para el consumo del usuario
      this.log(`${operation} failed: ${error.message}`);

      // Deje que la aplicación siga ejecutándose devolviendo un resultado vacío.
      return of(result as T);
    }
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService private log: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
              tap(_=> this.log('fetched heroes')),
              catchError(this.handleError<Hero[]>('getHeroes', [] ))
            );
  }

  getHero(id: number):Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id= ${id}`)),
      catchError(this.handleError<Hero>(`get Hero id=${id}`))
    );
  }
  /*
     el método put, toma 3 parámetros
     1) la URL
     2) los datos para actualizar (El héroe modificado)
     3) opciones
  */
  updateHero(hero: Hero):Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
        tap(_=> this.log(`update hero id=${hero.id}`)),
        catchError(this.handleError <any>('updateHero'))
    )
  }

  addHero(hero: Hero):Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id= ${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          this.log(`Héroes encontrados coinciden con el nombre: ${term}`):
          this.log(`Ǹo hay Héroes que coincidan con el nombre: ${term}`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', [])
      ));
  }
}
