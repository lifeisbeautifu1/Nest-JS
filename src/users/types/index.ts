import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  fullName: string;
  password: string;
}

export class SerializedUser {
  id: number;
  fullName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
