import { Component } from '@angular/core';
import { HeroesService, Heroe } from './../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) 
  {

      this.heroes = this.heroesService.getHeroes();

   }

   private VerHeroe(i)
   {
     console.log(i);
     this.router.navigate(['/heroe',i]);

   }



}
