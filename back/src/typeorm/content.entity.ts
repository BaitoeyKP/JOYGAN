import { UUID } from 'crypto';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from './admin.entity';
import { User } from './user.entity';

@Entity()
export class Content {
    @PrimaryGeneratedColumn('uuid')
    id:UUID;

    @Column({ length: 500 })
    text:string;

    @Column()
    time_display:number;

    @Column()
    donate:number;

    @Column()
    time_stamp:number;

    @Column({ length: 500 })
    pic:string;

    @Column({ length: 500,default:'queue',nullable: true})
    state:string;

    @ManyToOne(() => Admin, admin => admin.Contents)
    admin:Admin;

    @ManyToOne(() => User, user => user.Contents)
    user:User;
}