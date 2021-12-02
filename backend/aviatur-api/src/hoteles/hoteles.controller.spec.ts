import { Test, TestingModule } from '@nestjs/testing';
import { HotelesController } from './hoteles.controller';

describe('HotelesController', () => {
  let controller: HotelesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelesController],
    }).compile();

    controller = module.get<HotelesController>(HotelesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
