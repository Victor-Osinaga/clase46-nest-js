import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Productos")
    .setDescription('Api Productos')
    .setVersion("1")
    .addTag("Api")
    .build();
  
  const doc = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("swagger", app, doc)
  
  await app.listen(3000);
}
bootstrap();