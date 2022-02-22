import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtoGetPokemon } from './dto/get/dtoGetPokemon';

describe('AppController', () => {
  let appController: AppController;
  let dtoGetPokemon: DtoGetPokemon = { id: '1' };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getPokemon', () => {
    it('should return a json', () => {
      expect(appController.getPokemon(dtoGetPokemon)).toMatchObject(JSON);
    });
  });
});
