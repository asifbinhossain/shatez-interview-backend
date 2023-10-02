import { Test, TestingModule } from '@nestjs/testing';
import { ReadyController } from './ready.controller';
import { ReadyService } from './ready.service';

describe('ReadyController', () => {
  let controller: ReadyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadyController],
      providers: [ReadyService],
    }).compile();

    controller = module.get<ReadyController>(ReadyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it.skip('should return "OK"', () => {
    expect(controller.getReady()).toBe('OK');
  });
});
