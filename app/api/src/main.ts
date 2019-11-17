import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  await app.listen(port, () => {
    Logger.log(`REST listening at http://localhost:${port}/api`, 'Bootstrap');
    Logger.log(`GraphQL listening at http://localhost:${port}/graphql`, 'Bootstrap');
  });
}
bootstrap();
