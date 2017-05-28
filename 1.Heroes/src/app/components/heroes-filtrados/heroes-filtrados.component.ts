import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para recibir parámetros
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes-filtrados',
  templateUrl: './heroes-filtrados.component.html'
})
export class HeroesFiltradosComponent {

  private heroes;
  private termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService)
  {

    this.activatedRoute.params.subscribe(
      params =>
        { 
          this.termino = params['termino'];
          this.heroes = this.heroesService.buscarHeroes(this.termino);
        }
    );
  }


}
