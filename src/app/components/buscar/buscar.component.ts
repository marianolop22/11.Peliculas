import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public buscar:string="";
  public peliculas:any[] = [];

  constructor( private _peliculas: PeliculasService,
               private route:ActivatedRoute ) {

    this.route.params.subscribe ( params => {
      if ( params['peli'] ) {
        this.buscar = params['peli'];
        this.buscarPelicula ();
      } else {
        this._peliculas.peliculas = [];
      }
    })

  }

  ngOnInit() {
  }

  public buscarPelicula () {
    if ( this.buscar.length == 0 ) {
      return;
    }

    this._peliculas.buscarPelicula ( this.buscar ).subscribe ( response => {
      this.peliculas = response;
    })
  }

}
