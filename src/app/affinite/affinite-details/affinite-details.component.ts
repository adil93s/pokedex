import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affinite-details',
  templateUrl: './affinite-details.component.html',
  styleUrls: ['./affinite-details.component.css']
})
export class AffiniteDetailsComponent implements OnInit{
  
  id: string|null = null;
  isLoading: boolean = true;
  data :any;
  
  constructor(private route : ActivatedRoute){}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    fetch('https://pokebuildapi.fr/api/v1/pokemon/type/'+this.id)
    .then((response) => response.json())
    .then((types) => {
      this.isLoading = false;
      this.data = types;
    });
  
  }

}
