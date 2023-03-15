import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affinite',
  templateUrl: './affinite.component.html',
  styleUrls: ['./affinite.component.css']
})
export class AffiniteComponent implements OnInit {
  title = 'HTTP using native fetch API';
  private url: string = 'https://pokebuildapi.fr/api/v2/type';

  isLoading: boolean = true;
  data: any;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((AffiniteData) => {
        this.isLoading = false;
        this.data = AffiniteData;
      });
  }
}
