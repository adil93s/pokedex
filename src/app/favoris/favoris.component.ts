import { Component } from '@angular/core';
import { DataProvider } from '../DataProvider';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {

  favorites: any = DataProvider.favorites;
  fullHeartIcon = fasHeart;

  removeFavorite (id: number) {
    const pokemon = DataProvider.favorites.find((pokemon: any) => pokemon.id === id);
    const index = DataProvider.favorites.indexOf(pokemon);
    if (index !== -1) {
      DataProvider.favorites.splice(index, 1);
    }
  }

}
