import { ApiProperty} from '@nestjs/swagger';

export class HotelDto{

    @ApiProperty()
    readonly _id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly stars: number;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly image: string;

    @ApiProperty()
    readonly amenities: string[];
}