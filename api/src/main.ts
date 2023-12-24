import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from './config';
import { interceptors } from './core/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // apply pipes and interceptors
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors.apply(null, interceptors);

  // setup swagger documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Tiktok crawler')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, document);

  await app.listen(config.port);
}

bootstrap();
