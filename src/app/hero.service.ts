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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService private log: ${message}`);
  }

}
