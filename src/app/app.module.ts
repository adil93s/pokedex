import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, PokemonsComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
