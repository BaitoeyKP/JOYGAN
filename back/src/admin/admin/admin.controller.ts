import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe,Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from 'src/typeorm/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from '../admin/dto/CreateAdmin.dto';


@Controller('admin/user')
export class AdminController {
    constructor(
        private readonly adminService : AdminService
        ){}

        @Post('/register')
        @UsePipes(ValidationPipe)
        createNewAdmin(@Body() createAdminDto : CreateAdminDto){
            return this.adminService.createAdmin(createAdminDto)

        }
        @Post('/login')
        @UsePipes(ValidationPipe)
        loginAdmin(@Body() playload : {username:string, pass:string}){
            return this.adminService.loginAdmin(playload.username, playload.pass);

        }

        @Get('/qrcode')
        @UsePipes(ValidationPipe)
        getQRcode(@Request() req,@Param('tel')tel:string){
            return this.adminService.updateQRcode(req.user,tel);
        }
}


