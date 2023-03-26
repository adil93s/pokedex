import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affinite',
  templateUrl: './affinite.component.html',
  styleUrls: ['./affinite.component.css']
})
export class AffiniteComponent implements OnInit {

  private url: string = 'https://pokebuildapi.fr/api/v1/types';

  isLoading: boolean = true;
  data: any;
  types : any;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((AffiniteData) => {
        this.isLoading = false;
        this.data = AffiniteData;
      });
  }
}
