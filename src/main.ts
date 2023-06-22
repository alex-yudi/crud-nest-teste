import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Aqui seria a mesma coisa que fazer o instanciamento do express, para iniciar o servidor.

  await app.listen(3000);
}
bootstrap();
