import { Controller, Get, Query } from '@nestjs/common';

import { CoreService } from '../services/core.service';

@Controller()
export class CoreController {
  constructor(private service: CoreService) {}

  @Get('hello')
  hello(@Query('name') name: string): string {
    return this.service.hello(name);
  }

  @Get('uptime')
  uptime(): number {
    return this.service.uptime();
  }
}
