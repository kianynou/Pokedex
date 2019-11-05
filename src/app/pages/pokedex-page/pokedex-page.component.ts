import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {

  pokemons: Pokemon[];
  pokemonDetail: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  onPokemonSelect(selectedPokemon: Pokemon){
    this.pokemonDetail = selectedPokemon;
  }

}
