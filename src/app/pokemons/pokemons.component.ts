import { Component } from '@angular/core';
import { DataProvider } from '../DataProvider';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent{
  data: any = DataProvider.data;
  isLoading: boolean = DataProvider.isLoading;
  favorites: any[] = DataProvider.favorites;

  addRemoveFavorite(isFavorite: boolean, id: number) {
    if (!isFavorite) {
      this.favorites = this.favorites.filter(favorite => favorite.id !== id);
    } else {
      this.favorites.push(this.data[id-1]);
    }
  }
}
