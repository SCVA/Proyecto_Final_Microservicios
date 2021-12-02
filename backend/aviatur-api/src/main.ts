import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('aviatur_api')
  .setDescription('API REST para el registro de hoteles en la compañía AVIATUR.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync("./swagger.json", JSON.stringify(document));
  SwaggerModule.setup('swagger', app, document);
  await app.listen(8080);
}
bootstrap();