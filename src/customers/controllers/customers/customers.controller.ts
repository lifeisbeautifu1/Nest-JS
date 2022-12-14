import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';


import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get('/:id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id);
    if (customer) return customer;
    else
      throw new HttpException(
        `Customer with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
  }
  @Post('/')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }
  @Get('/')
  getCustomers() {
    return this.customerService.getCustomers();
  }
}
