import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export interface Config {
  baseUrl: string;
  port: number;
  database: TypeOrmModuleOptions;
  timezone: string;
  jwtSecretKey: string;
  hashKey: string;
  jwtExpireIn: string;
}

export const config: Config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  port: +process.env.PORT || 8000,
  jwtSecretKey: process.env.JWT_SECRET_KEY || 'abcxyz',
  jwtExpireIn: process.env.JWT_EXPIRE_TIME || '7d',
  hashKey: process.env.HASH_KEY || 'abcxyz',
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '20011004',
    database: process.env.DATABASE_NAME || 'tiktok_tool',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  },
  timezone: process.env.TZ,
};
