import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ): void {
    let heroeArr = this._heroesService.buscarHeroes(termino)
    console.log( heroeArr );
  }

}
