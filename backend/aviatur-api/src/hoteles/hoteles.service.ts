import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './schemas/hotel.schema';
import { HotelDto } from './dto/hotel.dto';
import { FilterDto } from '../filters/dto/filter.dto';
import { FiltersService } from '../filters/filters.service';


@Injectable()
export class HotelesService {

  constructor(@InjectModel(Hotel.name) private readonly hotelModel: Model<Hotel>) { }

  async post(hotelDto: HotelDto): Promise<Hotel> {        
    const hotel = new this.hotelModel(hotelDto);    
    return hotel.save();
  }

  async getAll(filterDto : FilterDto): Promise<Hotel[]> {
    const filtersService = new FiltersService(filterDto);    
    return await this.hotelModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
      .sort(filtersService.getSortBy())
      .exec();
  }

  async getById(id: string): Promise<Hotel> {
    try {
      return await this.hotelModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, hotelDto: HotelDto): Promise<HotelDto> {
    try {
      await this.hotelModel.findByIdAndUpdate(id, hotelDto, {new: true}).exec();
      return await this.hotelModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.hotelModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }    

}