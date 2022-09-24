import { Exclude } from 'class-transformer';

export interface User {
  fullName: string;
  password: string;
}

export class SerializedUser {
  fullName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
