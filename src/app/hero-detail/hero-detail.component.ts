import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  
  heroD:Hero | undefined;

  constructor(
    private route:ActivatedRoute,
    private heroService: HeroService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroD();
  }

  getHeroD(): void {
    let id:any = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe( hero => this.heroD = hero);
  }

  goBack(): void {
    this.location.back();
  }


}
