import { IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class DtoGetPokemon {
  @IsOptional()
  @IsNotEmpty()
  id?: string;
}
