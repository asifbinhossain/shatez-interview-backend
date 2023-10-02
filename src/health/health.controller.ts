import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiTags('health')
  @ApiOperation({ summary: 'Application liveness check' })
  @ApiResponse({ status: 200, description: 'OK' })
  @Get()
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
