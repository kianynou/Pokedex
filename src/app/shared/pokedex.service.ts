import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './pokemon-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = POKEMON;

  constructor() { }

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon)
  }
}