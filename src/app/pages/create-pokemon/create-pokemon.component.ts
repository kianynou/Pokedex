import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';


@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  newPokemon: Pokemon = {name:'',imageUrl:'',description:''};


  constructor(private service: PokedexService) { }

  ngOnInit() {
  }
  addPokemonToList(){
    this.service.addPokemon(this.newPokemon)
    console.log(this.newPokemon.name)
  }
}
