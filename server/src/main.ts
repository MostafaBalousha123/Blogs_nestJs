import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const Config = new ConfigService();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({ origin: [Config.get('CLIENT')] });
  app.setGlobalPrefix('/api/v1');
  await app.listen(8080);
}
bootstrap();