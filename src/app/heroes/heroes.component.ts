import { Component, OnInit } from '@angular/core';  
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';



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

  heroes = HEROES;

  constructor() { }
  
  ngOnInit(): void {
    
  }
  

}
