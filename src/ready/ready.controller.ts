import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReadyService } from './ready.service';

@Controller('ready')
export class ReadyController {
  constructor(private readonly readyService: ReadyService) {}

  @ApiTags('ready')
  @ApiOperation({ summary: 'Application rediness check' })
  @ApiResponse({ status: 200, description: 'OK' })
  @Get()
  getReady(): string {
    return this.readyService.getReady();
  }
}
