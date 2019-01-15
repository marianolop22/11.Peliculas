import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { PeliculaComponent } from 'src/app/components/pelicula/pelicula.component';
import { BuscarComponent } from 'src/app/components/buscar/buscar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
  { path: 'buscar/:peli', component: BuscarComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: ''             , pathMatch: 'full', redirectTo: 'home' },
  { path: '**'           , pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
