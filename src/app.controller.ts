import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  getHello(): string {
    return this.config.get('app.name');
  }
}
