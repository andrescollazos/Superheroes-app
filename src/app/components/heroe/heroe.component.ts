import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService) {
                this.activatedRoute.params.subscribe( params => {
                  this.heroe = this._heroesServices.getHeroe( params['id']);
                })
              }
}
