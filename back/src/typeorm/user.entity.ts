import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
  
  @OneToMany(() => Content, Content => Content.user)
  Contents: Content[];

   /* @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;
  */
}