import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ length: 500 })
    admin:string;

    @Column({ length: 500 })
    password:string;

    @Column()
    expire:number

    @Column({ length: 500 })
    code:string

    @Column({ length: 500 })
    displayname:string

    @Column({ length: 500 })
    tel:string

    @Column()
    mode:boolean

    @OneToMany(() => Content, Content => Content.admin)
    Contents: Content[];

}