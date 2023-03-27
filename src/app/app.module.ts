import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FavorisComponent } from './favoris/favoris.component';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataProvider } from './DataProvider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from "ng2-search-filter";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'favorites', component: FavorisComponent },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, PokemonsComponent, HomeComponent, PokemonCardComponent, FooterComponent, LoadingSpinnerComponent, FavorisComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatChipsModule, MatGridListModule, RouterModule.forRoot(appRoutes), FontAwesomeModule, HttpClientModule,FormsModule,Ng2SearchPipeModule],
  providers: [DataProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
