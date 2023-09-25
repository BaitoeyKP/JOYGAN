import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Admin } from './admin.entity';

@Entity()
export class LogUser {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'log_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({
    nullable: false,
    default: '',
  })
  code: string;
  
  @OneToMany(() => User, User => User.username)
  User: User[];

  @OneToMany(() => Admin, admin => admin.tel)
  admin:Admin;
}