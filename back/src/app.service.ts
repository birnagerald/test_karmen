import { Injectable } from '@nestjs/common';
import { DtoGetPokemon } from './dto/get/dtoGetPokemon';
import { Pokemon } from './model/pokemonType';
const fetch = require('node-fetch');

@Injectable()
export class AppService {
  async getPokemon({ id }: DtoGetPokemon): Promise<Pokemon> {
    const pokemon: Pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}/`,
    ).then((response: { json: () => Pokemon }) => response.json());
    return pokemon;
  }
}
