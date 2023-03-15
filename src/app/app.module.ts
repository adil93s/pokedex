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
import { FavorisComponent } from './favoris/favoris.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'favorites', component: FavorisComponent },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, PokemonsComponent, PokemonsComponent, FavorisComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
