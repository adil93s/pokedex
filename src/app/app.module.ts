import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { AffiniteComponent } from './affinite/affinite.component';
import { AffiniteDetailsComponent } from './affinite/affinite-details/affinite-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'affinite', component: AffiniteComponent },
  { path: 'affinite/:id', component : AffiniteDetailsComponent}
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, PokemonsComponent, PokemonsComponent, AffiniteComponent, AffiniteDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
