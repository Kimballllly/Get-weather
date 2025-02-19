import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS to allow your frontend to access the backend
  app.enableCors({
    origin: ['https://kimballllly.github.io', 'https://kimballllly.github.io/Get-weather-frontend/'],
    methods: ['GET'],
    credentials: true,
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}

bootstrap();
