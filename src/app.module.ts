import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ReadyModule } from './ready/ready.module';

@Module({
  imports: [HealthModule, ReadyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
