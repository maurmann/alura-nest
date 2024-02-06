import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfig } from './config/postgres.config';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    UserModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfig,
      inject: [PostgresConfig],
    }),
    CacheModule.register<RedisClientOptions>({
      clientInfoTag
        : 'redis - 15212.c56.east - us.azure.cloud.redislabs.com',
      port: 15212,
    }),
    isGlobal: true,
    }),
  ],
controllers: [],
  providers: [],
})
export class AppModule { }
