import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';

@Entity()
export class LogUser {
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
    default: 0,
  })
  amount: number;

  @Column({
    nullable: false,
    default: '',
  })
  code: string;
  
  @Column({ type: 'timestamp with time zone' }) 
  date: Number;
 
}