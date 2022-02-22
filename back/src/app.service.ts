import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DtoGetPokemon } from './dto/get/dtoGetPokemon';
import { Pokemon } from './model/pokemonType';
const fetch = require('node-fetch');

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  async getPokemon({ id }: DtoGetPokemon): Promise<Pokemon> {
    const pokemon: Pokemon = await fetch(
      `${this.configService.get<string>('POKEMON_API_URL')}/pokemon/${id}/`,
    ).then((response: { json: () => Pokemon }) => response.json());
    return pokemon;
  }
}
