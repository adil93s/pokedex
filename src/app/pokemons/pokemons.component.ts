import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
	title = 'HTTP using native fetch API';
	private url: string = 'https://pokebuildapi.fr/api/v1/pokemon';

  isLoading: boolean = true;
  data: any;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((pokemonsData) => {
        this.isLoading = false;
        
        this.data = pokemonsData;
      });
  }
}
