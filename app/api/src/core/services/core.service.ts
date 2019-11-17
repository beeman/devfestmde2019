import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  hello(name: string): string {
    return `Hello ${name || 'world' }!`;
  }

  uptime(): number {
    return process.uptime();
  }
}
