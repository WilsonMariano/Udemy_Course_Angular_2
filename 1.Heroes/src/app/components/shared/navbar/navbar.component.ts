import { Component } from '@angular/core';
import { HeroesService } from  './../../../services/heroes.service';
import { HeroesFiltradosComponent } from './../../heroes-filtrados/heroes-filtrados.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private heroesService: HeroesService,
              private router: Router) 
  { }

  private buscarHeroe( parametro )
  {

    this.router.navigate(['/buscador',parametro])

  }


}
