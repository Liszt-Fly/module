import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly config: ConfigService) {}
  @Get()
  index() {
    return `${this.config.get('app.name')}`;
  }
}
