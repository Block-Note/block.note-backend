import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Project')
		.setVersion('0.0.1')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(5000);
}

bootstrap();
