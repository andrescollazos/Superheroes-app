import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _routerService: Router ) {}

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ): void {
    if (termino.length >= 1) {
      this._routerService.navigate(['/busqueda', termino])
    }
  }

}
