import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS to allow your frontend to access the backend
  app.enableCors({
    origin: 'https://Kimballllly.github.io', // GitHub Pages domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Backend running on: https://get-weather-utiw.onrender.com`);
}

bootstrap();
