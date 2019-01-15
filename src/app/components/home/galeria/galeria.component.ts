import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

@Input('peliculas') peliculas:any[];
@Input('titulo') titulo:any[];


  constructor() { }

  ngOnInit() {
  }

}
