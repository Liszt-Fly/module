import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ArticleModule } from './article/article.module';
import path, { dirname } from 'path';
const configPath = path.resolve(__dirname, './configure');
@Module({
  imports: [ConfigModule.register({ path: configPath }), ArticleModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
