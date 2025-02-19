import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for your frontend
  app.enableCors({
    origin: 'https://Kimballllly.github.io/weather-frontend', // Frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Backend running on: http://localhost:${process.env.PORT ?? 3000}`);
}

bootstrap();
