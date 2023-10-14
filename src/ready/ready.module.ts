import { Module } from '@nestjs/common';
import { ReadyController } from './ready.controller';
import { ReadyService } from './ready.service';

import { FirebaseModule } from "src/Firebase/firebase.module";

@Module({
  imports: [FirebaseModule],
  controllers: [ReadyController],
  providers: [ReadyService],
})
export class ReadyModule {}
