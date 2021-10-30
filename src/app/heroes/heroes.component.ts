import { Component, OnInit } from '@angular/core';  
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//https://docs.angular.lat/tutorial/toh-pt6

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];  

  constructor(private heroService: HeroService) { }  
  
  ngOnInit(): void {
    this.getHeroesCompo();
  }
  
  getHeroesCompo (): void {
    this.heroService.getHeroes()
          .subscribe( heroes => this.heroes = heroes);  
  }


  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    })
  }

}
