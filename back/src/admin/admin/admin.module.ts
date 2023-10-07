import {  Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin ,LogUser} from 'src/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';


@Module({
  imports: [TypeOrmModule.forFeature([Admin,LogUser]),
  
  JwtModule.register({
  global: true,
  secret: jwtConstants.secret})
  ],
  controllers: [AdminController],
  providers: [AdminService],

})
export class AdminModule {}



