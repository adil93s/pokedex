import { Component } from '@angular/core';
import { DataProvider } from './DataProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  constructor() {
    DataProvider.setData();
  }
}
