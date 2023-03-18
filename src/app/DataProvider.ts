import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  private static _url: string = 'https://pokebuildapi.fr/api/v1/pokemon';
  static _data: any;
  static _isLoading: boolean ;
  static _favorites: any[] = [];
  static loadingUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  static setData() {
    DataProvider._isLoading = true;
    fetch(DataProvider._url)
      .then((response) => response.json())
      .then((pokemonsData) => {
        DataProvider._isLoading = false;
        DataProvider._data = pokemonsData;
        this.loadingUpdated.emit(DataProvider._isLoading);
      });
  }

  static get isLoading(): boolean {
    return this._isLoading;
  }

  static get data(): any {
    return this._data;
  }

  static get favorites(): any[] {
    return this._favorites;
  }

}
