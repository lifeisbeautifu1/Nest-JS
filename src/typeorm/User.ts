import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Users',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: string;

  @Column({
    nullable: false,
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
  })
  emailAddress: string;

  @Column({
    nullable: false,
  })
  password: string;
}
