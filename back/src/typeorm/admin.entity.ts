import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id:UUID;

    @Column({ length: 500 })
    admin:string;

    @Column({ length: 500 })
    password:string;

    @Column()
    expire:number

    @Column()
    code:string

    @Column()
    displayname:string

    @Column()
    tel:string

    @Column()
    mode:boolean

}