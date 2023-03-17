import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  _data: any;
  _isLoading: boolean = true;
  _favorites: any[] = [];
  private url: string = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor() {
    fetch(this.url)
      .then((response) => response.json())
      .then((pokemonsData) => {
        this._isLoading = false;
        this._data = pokemonsData;
        console.log(this._isLoading);
      });
  }

  static get isLoading(): boolean {
    return this.isLoading;
  }

  static get data(): any {
    return this.data;
  }

  static get favorites(): any[] {
    return this.favorites;
  }

}
