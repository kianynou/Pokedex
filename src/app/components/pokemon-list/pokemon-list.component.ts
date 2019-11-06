import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  detail: Pokemon;

  constructor(private service: PokedexService) { }

//appel de l'attribut de la pokedex-page  
  
  @Input() pokemons: Pokemon[];
  
// envoie des donner au click
  
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  ngOnInit() { this.pokemons = this.service.pokemons
    console.log(this.pokemons)
  }

  onPokemonClick(pokemon: Pokemon) {
    this.pokemonClick.emit(pokemon)
  }

}
