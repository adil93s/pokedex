import { Component, Input, OnInit } from '@angular/core';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{
  @Input() id!: number;
  @Input() name!: string;
  @Input() image!: string;
  @Input() types!: any;
  isFavorite: boolean = false;
  heartIcon = farHeart;
  fullHeartIcon = fasHeart;

  ngOnInit(): void {
    for (let index = 0; index < this.types.length; index++) {
      if(this.types[index].name === 'Poison') this.types[index].color = '#923FCC';
      if(this.types[index].name === 'Plante') this.types[index].color = '#3DA224';
      if(this.types[index].name === 'Feu') this.types[index].color = '#E72324';
      if(this.types[index].name === 'Eau') this.types[index].color = '#2481EF';
      if(this.types[index].name === 'Insecte') this.types[index].color = '#92A212';
      if(this.types[index].name === 'Normal') this.types[index].color = '#A0A2A0';
      if(this.types[index].name === 'Vol') this.types[index].color = '#82BAEF';
      if(this.types[index].name === 'Combat') this.types[index].color = '#FF8100';
      if(this.types[index].name === 'Psy') this.types[index].color = '#EF3F7A';
      if(this.types[index].name === 'Electrik') this.types[index].color = '#FAC100';
      if(this.types[index].name === 'Glace') this.types[index].color = '#E4F0F7';
      if(this.types[index].name === 'Sol') this.types[index].color = '#92501B';
      if(this.types[index].name === 'Roche') this.types[index].color = '#B0AA82';
      if(this.types[index].name === 'Spectre') this.types[index].color = '#703F70';
      if(this.types[index].name === 'Dragon') this.types[index].color = '#4F60E2';
      if(this.types[index].name === 'Acier') this.types[index].color = '#60A2B9';
      if(this.types[index].name === 'Fée') this.types[index].color = '#EF70EF';
      if(this.types[index].name === 'Ténèbres') this.types[index].color = '#4F3F3D';
    }
  }

  toggleFavorite () {
    this.isFavorite = !this.isFavorite;
  }
}

/* if(type.name === 'Poison') this.type.color = '#923FCC';
      if(type.name === 'Plante') this.type.color = '#3DA224';
      if(type.name === 'Feu') this.type.color = '#E4F0F7';
      if(type.name === 'Eau') this.type.color = '#2481EF';
      if(type.name === 'Insecte') this.type.color = '#92A212';
      if(type.name === 'Normal') this.type.color = '#A0A2A0';
      if(type.name === 'Vol') this.type.color = '#82BAEF';
      if(type.name === 'Combat') this.type.color = '#FF8100';
      if(type.name === 'Psy') this.type.color = '#EF3F7A';
      if(type.name === 'Electrik') this.type.color = '#FAC100';
      if(type.name === 'Glace') this.type.color = '#E4F0F7';
      if(type.name === 'Sol') this.type.color = '#92501B';
      if(type.name === 'Roche') this.type.color = '#B0AA82';
      if(type.name === 'Spectre') this.type.color = '#703F70';
      if(type.name === 'Dragon') this.type.color = '#4F60E2';
      if(type.name === 'Acier') this.type.color = '#60A2B9';
      if(type.name === 'Fée') this.type.color = '#EF70EF';
      if(type.name === 'Ténèbres') this.type.color = '#4F3F3D'; */
