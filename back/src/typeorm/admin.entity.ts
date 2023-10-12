import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ length: 500 })
    admin_username:string;

    @Column({ length: 500 })
    admin_password:string;

    
    @Column({ length: 500 })
    code:string

    @Column({ length: 500 })
    displayname:string
    
    @Column({ length: 500 })
    tel:string
    
    @Column()
    mode:boolean

    @Column({ nullable:true }) // กำหนดค่าเริ่มต้นให้กับคอลัมน์ "expire"
    expire:number;
    
    @OneToMany(() => Content, Content => Content.admin)
    Contents: Content[];

}