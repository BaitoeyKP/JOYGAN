import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //app.use( express.static(join(__dirname, '..' , 'QRpic')));
  app.use(express.json({ limit: '10mb' })); // Increase the limit as needed
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  await app.listen(3000);
}
bootstrap();
