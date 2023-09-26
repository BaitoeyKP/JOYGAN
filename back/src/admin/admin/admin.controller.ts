import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from 'src/typeorm/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from '../dto/CreateAdmin.dto';


@Controller('admin/user')
export class AdminController {
    constructor(
        private readonly adminService : AdminService
        ){}
         @UsePipes(ValidationPipe)
        @Post("register")
        createNewAdmin(@Body() createAdminDto : CreateAdminDto){
            return this.adminService.createAdmin(createAdminDto)

        }
}


