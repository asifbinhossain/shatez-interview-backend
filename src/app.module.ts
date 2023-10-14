import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ReadyModule } from './ready/ready.module';
import { FirebaseModule } from './Firebase/firebase.module';

@Module({
  imports: [HealthModule, ReadyModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
