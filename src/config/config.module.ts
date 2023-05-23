import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
//* 设置成全局组件,在其他模块中使用,不需要使用import,但是还是需要使用exports
@Global() //设置成全局组件
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(options: { path: string }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: options }],
      exports: ['CONFIG_OPTIONS'],
    };
  }
}
