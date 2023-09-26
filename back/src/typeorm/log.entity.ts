import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  
 
}