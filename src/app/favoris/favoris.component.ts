import { Component } from '@angular/core';
import { DataProvider } from '../DataProvider';

@Component({
	selector: 'app-favoris',
	templateUrl: './favoris.component.html',
	styleUrls: ['./favoris.component.css']
})
export class FavorisComponent{
	favorites: any[] = DataProvider.favorites;
  isLoading: boolean = DataProvider.isLoading;
}
