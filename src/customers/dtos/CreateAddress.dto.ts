import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  zip: number;
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
}
