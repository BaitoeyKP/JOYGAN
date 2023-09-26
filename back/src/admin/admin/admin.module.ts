import {  Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm';
=======

>>>>>>> 00ddb6b6c1e3c05429ef500c0f90151e1fe71737

import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],

})
export class AdminModule {}



