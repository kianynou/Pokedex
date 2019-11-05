import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor() { }

  @Input() detailedPokemon: Pokemon;


  ngOnInit() {
  }

}
