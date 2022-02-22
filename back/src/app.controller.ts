import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoGetPokemon } from './dto/get/dtoGetPokemon';
import { Pokemon } from './model/pokemonType';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getPokemon(@Param() dtoGetPokemon: DtoGetPokemon): Promise<Pokemon> {
    if (Number(dtoGetPokemon.id) < 1) {
      throw new HttpException('Parameter is not valid !', 400);
    }
    return this.appService.getPokemon(dtoGetPokemon);
  }
}
