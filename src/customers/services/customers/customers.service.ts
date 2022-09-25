import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      fullName: 'John Doe',
    },
    {
      id: 2,
      fullName: 'Jane Doe',
    },
    {
      id: 3,
      fullName: 'Bob Doe',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((c) => c.id === id);
  }
  createCustomer(customer: CreateCustomerDto) {
    this.customers.push(customer);
  }
  getCustomers() {
    return this.customers;
  }
}
