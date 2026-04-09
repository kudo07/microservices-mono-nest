import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICES_PORTS } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  // await app.listen(process.env.port ?? 3000);

  // ENABLE VALIDATION ==> DTO WHICH WE USE IN THE AUTH-SERVICE.CONTROLLER
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(SERVICES_PORTS.AUTH_SERVICE);
  console.log(`Auth Service is running on port ${SERVICES_PORTS.AUTH_SERVICE}`);
}
bootstrap();
