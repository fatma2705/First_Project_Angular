import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {NgFor, NgIf, UpperCasePipe } from  '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,NgFor,NgIf,HeroDetailComponent,RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  constructor(private heroService: HeroService) {}

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void{
    this.getHeroes();
  }

}

