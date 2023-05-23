import { Inject, Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
//@Optional的含义表示是有默认值,并且该内容不是一个服务,不需要进行依赖注入
export class ConfigService {
  constructor(
    @Optional() private config = {},
    @Inject('CONFIG_OPTIONS') private options: { path: string },
  ) {
    readdirSync(options.path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(options.path, file));
        this.config = { ...this.config, ...module.default() };
      }
    });
  }
  get(path: string) {
    console.log(path.split('.'));
    return path.split('.').reduce((config, name) => config[name], this.config);
  }
}
