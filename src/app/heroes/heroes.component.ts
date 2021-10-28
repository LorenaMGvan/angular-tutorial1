import { Component, OnInit } from '@angular/core';  
import { Hero } from '../hero';
import { HeroService } from '../hero.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  // la propiedad hero es de tipo Hero  e inicializando en id=1 y name = Windstorm
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // }  

  // la propiedad hero es de tipo Hero  e inicializando en id=1 y name = Windstorm
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // }  
  heroes: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroService: HeroService) { }
  
  
  onSelectHeroe( heroe: Hero): void {
    this.selectedHero = heroe;
  }
  
  // getHeroesCompo (): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // La nueva versión espera a que el 'Observable' emita una serie de héroes,— que podría suceder ahora o varios minutos a partir de ahora. El método subscribe() pasa el arreglo emitida a la devolución de llamada, que establece la propiedad 'heroes' del componente.
  // Este enfoque asincrónico funcionará cuando el HeroService solicite héroes del servidor.

  getHeroesCompo (): void {
    this.heroService.getHeroes()
          .subscribe( heroes => this.heroes = heroes);
          // .subscribe(  (heroesR) => {
          //     return  this.heroes = heroesR;
          // })
  }
  
  ngOnInit(): void {
    this.getHeroesCompo();
  }
}
