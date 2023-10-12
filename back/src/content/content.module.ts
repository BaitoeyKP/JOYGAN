import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Admin, Content, LogUser } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [TypeOrmModule.forFeature([Content,Admin,LogUser]),
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    
  }),],
  controllers: [ContentController],
  providers: [ContentService]
})
export class ContentModule {}
