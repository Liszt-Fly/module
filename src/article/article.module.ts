import { Global, Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [ArticleController],
})
export class ArticleModule {}
