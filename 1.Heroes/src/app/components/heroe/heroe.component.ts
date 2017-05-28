import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para recibir parámetros
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private heroe: any;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService)
  {

    this.activatedRoute.params.subscribe(
      params => this.heroe = this.heroesService.getHeroe(params['id']),
      err => console.error(err),
      () => console.log("Todo bien")
    )
  }

}
