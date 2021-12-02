import { Module } from '@nestjs/common';
import { HotelesController } from './hoteles.controller';
import { HotelesService } from './hoteles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './schemas/hotel.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: Hotel.name, schema: HotelSchema}])],
  controllers: [HotelesController],
  providers: [HotelesService]
})
export class HotelesModule {}