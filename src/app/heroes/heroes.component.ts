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
  
  getHeroesCompo (): void {
    this.heroes = this.heroService.getHeroes();
  }
  
  ngOnInit(): void {
    this.getHeroesCompo();
  }
}
