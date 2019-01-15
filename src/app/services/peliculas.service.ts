import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apiKey:string = '56800e810d6885d4376aa1f73b7c2a6b';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  public peliculas:any[];

  constructor( private http:HttpClient ) { }

//https://api.themoviedb.org/3/movie/550?api_key=56800e810d6885d4376aa1f73b7c2a6b

    //let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    //let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    //para las imagenes image.tmdb.org/t/p/w300


  getPopulares (): Observable<any> {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es-AR`;
    //return this.http.jsonp (url, 'callback=JSONP_CALLBACK').pipe ( map ( response => {
    return this.http.get (url).pipe ( map ( (response:any) => {
      return response.results;
    } ));
  }


  buscarPelicula ( texto: string ): Observable<any> {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get (url).pipe (
      map ( (response:any) => {

        this.peliculas = response.results;
        return response.results;
      })
    //   map ( response => {
    //   return response;
    // } )
  );
  }

  getCartelera ():Observable<any> {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate ( hasta.getDate() + 7 );

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()+7}`;

    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&language=es-AR`;
    //return this.http.jsonp (url, 'callback=JSONP_CALLBACK').pipe ( map ( response => {
    return this.http.get (url).pipe ( map ( (response:any) => {
      return response.results;
    } ));
  }

  getPopularesNinos ():Observable<any> {

    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es-AR`;
    return this.http.get (url).pipe ( map ( (response:any) => {
      return response.results;
    } ));
  }


  getPelicula ( id: string ):Observable<any> {

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es-AR`;
    return this.http.get (url).pipe ( map ( (response:any) => {
      return response;
    } ));
  }



}
