import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroeArr: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService,
              private _routerService: Router) {
                this.activatedRoute.params.subscribe(params => {
                  this.termino = params['termino'];
                  this.heroeArr = this._heroesServices.buscarHeroes(this.termino);
                  //console.log(this.heroeArr);
                })
  }

  ngOnInit(): void {
  }

  /* verHeroe(heroe: Heroe) {
    let id = this._heroesServices.getIndexHeroe(heroe);
    this._routerService.navigate(['/heroe', id])
  } */

}
