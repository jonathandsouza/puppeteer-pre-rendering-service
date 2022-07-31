import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = parseInt(process.env.ENV_HOST_PORT, 10) || 3030;
	await app.listen(port);
}
bootstrap();
