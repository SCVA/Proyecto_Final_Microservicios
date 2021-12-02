import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelesModule } from './hoteles/hoteles.module';

@Module({
   imports: [MongooseModule.forRoot(`mongodb+srv://admin:adminAviatur@aviaturcluster.wrdko.mongodb.net/aviatur_api?retryWrites=true&w=majority`, 
  { useFindAndModify: false }),HotelesModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}