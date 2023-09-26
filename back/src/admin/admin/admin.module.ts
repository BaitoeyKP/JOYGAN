import {  Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 
  controllers: [AdminController],
  providers: [AdminService],
 
})
export class AdminModule {}
