import { Test, TestingModule } from '@nestjs/testing';
import { HotelesService } from './hoteles.service';

describe('HotelesService', () => {
  let service: HotelesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelesService],
    }).compile();

    service = module.get<HotelesService>(HotelesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
