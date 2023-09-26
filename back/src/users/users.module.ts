import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Content } from 'src/typeorm';
import { Admin } from 'src/typeorm';
import { LogUser } from 'src/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Content]),
    TypeOrmModule.forFeature([Admin]),
    TypeOrmModule.forFeature([LogUser])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
