import { Test, TestingModule } from '@nestjs/testing';
import { ReadyService } from './ready.service';

describe('ReadyService', () => {
  let service: ReadyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadyService],
    }).compile();

    service = module.get<ReadyService>(ReadyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.skip('should return "OK"', () => {
    expect(service.getReady()).toBe('OK');
  });
});
