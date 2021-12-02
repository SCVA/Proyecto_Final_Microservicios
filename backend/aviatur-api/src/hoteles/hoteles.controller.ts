import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { ApiTags } from '@nestjs/swagger';
import { HotelDto } from './dto/hotel.dto';
import { FilterDto} from '../filters/dto/filter.dto';



@ApiTags('hoteles')
@Controller('hoteles')
export class HotelesController {

  constructor(private readonly hotelesService: HotelesService) { }

  @Post()
  async post(@Res() res, @Body() hotelDto: HotelDto) {
    const hotel = await this.hotelesService.post(hotelDto)
    return res.status(HttpStatus.OK).json({
      Data: hotel,
      Message: "Registration successfull",
      Status: "201",
      Success: true
    });
  }

  @Get()
  async getAll(@Res() res, @Query() filterDto: FilterDto) {
    const hoteles = await this.hotelesService.getAll(filterDto);
    return res.status(HttpStatus.OK).json({
      Data: hoteles,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const hotel = await this.hotelesService.getById(id);
    if (!hotel) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({
      Data: hotel,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() hotelDto: HotelDto) {
    const hotel = await this.hotelesService.put(id, hotelDto);
    if (!hotel) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: hotel,
      Message: "Update successfull",
      Status: "200",
      Success: true
    });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const hotel = await this.hotelesService.delete(id);
    if (!hotel) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: {
        _id: id
      },
      Message: "Delete successfull",
      Status: "200",
      Success: true
    });
  }
}