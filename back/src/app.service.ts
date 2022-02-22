import { Injectable } from '@nestjs/common';
import { DtoGetPokemon } from './dto/get/dtoGetPokemon';
import { Pokemon } from './model/pokemonType';
const fetch = require('node-fetch');

@Injectable()
export class AppService {
  async getPokemon({ id }: DtoGetPokemon): Promise<Pokemon> {
    console.log(id);
    const t: Pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}/`,
    ).then((response: { json: () => Pokemon }) => response.json());
    return t;
  }
}
