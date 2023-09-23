import { TypeOrmModule } from '@nestjs/typeorm';

export const config:TypeOrmModule={
    type:'postgres',
    username:'postgres',
    password:'postgres',
    port:5432,
    host:'127.0.0.1',
    database:'sofdev',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],
};