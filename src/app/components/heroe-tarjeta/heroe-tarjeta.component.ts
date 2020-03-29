import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ],
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor(private _heroesService: HeroesService,
              private _routerService: Router) { }

  ngOnInit(): void {
  }

  verHeroe() {
    let index = this._heroesService.getIndexHeroe(this.heroe);
    this._routerService.navigate(['/heroe', index])
  }

}
