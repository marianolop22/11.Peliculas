import { Component, OnInit } from '@angular/core';

import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public peliculas:any[];
  public populares:any[];
  public popularesNinos:any[];


  constructor( private _peliculas:PeliculasService ) {


    this._peliculas.getCartelera ().subscribe ( (response:any) => {
      this.peliculas = response;
    })

    this._peliculas.getPopulares ().subscribe ( (response:any) => {
      this.populares = response;
    })

    this._peliculas.getPopularesNinos ().subscribe ( (response:any) => {
      this.popularesNinos = response;
    })
  }

  ngOnInit() {
  }

}
