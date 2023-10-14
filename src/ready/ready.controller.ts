import { Controller, Get, Req } from '@nestjs/common';
import { FirebaseService } from '../Firebase/firebase.service';
@Controller('ready')
export class ReadyController {
  constructor(private readonly firebaseService: FirebaseService) {}
  @Get()
  async getReady():Promise<string> {
    const firebaseApp = this.firebaseService.getFirebaseApp();
    if (firebaseApp && firebaseApp.database()) {
      return 'Database connection is ready.';
    } else {
      return 'Database connection is not ready yet.';
    }
  }
}
