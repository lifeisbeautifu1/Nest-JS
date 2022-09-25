import {
  IsNumberString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
