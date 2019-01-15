import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string;
  busqueda:string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private _peliculas: PeliculasService) {

    this.route.params.subscribe ( params => {

      if ( params['busqueda'] ) {
        this.busqueda = params['busqueda'];
      }

      if ( params['id'] && params['pag'] ) {
        this.regresarA = params['pag'];
        this._peliculas.getPelicula ( params['id'] ).subscribe ( response => {
          this.pelicula = response;
        });
      }
    })
  }

  ngOnInit() {
  }

}
