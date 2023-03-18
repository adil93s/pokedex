import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../DataProvider';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  data: any = DataProvider.data;
  isLoading: boolean = DataProvider.isLoading;

  ngOnInit(): void {
    DataProvider.loadingUpdated.subscribe((isLoading) => {
      this.isLoading = isLoading;
      this.data = DataProvider.data;
    });
  }

  toggleFavorite(id: number) {
    const pokemon = DataProvider.data.find((pokemon: any) => pokemon.id === id);
    const index = DataProvider.favorites.indexOf(pokemon);
    if (index === -1) {
      DataProvider.favorites.push(pokemon);
    } else {
      DataProvider.favorites.splice(index, 1);
    }
  }
}
