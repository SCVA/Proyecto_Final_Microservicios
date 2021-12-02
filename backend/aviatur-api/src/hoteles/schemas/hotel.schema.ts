import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ collection: 'hoteles' })
export class Hotel extends Document {

    @Prop({ required: true })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    stars: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    amenities: string[];

}

export const HotelSchema = SchemaFactory.createForClass(Hotel);