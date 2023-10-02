import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadyService {
  getReady(): string {
    return 'Not connected to database Yet';
  }
}
