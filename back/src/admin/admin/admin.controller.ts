import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
<<<<<<< HEAD

        }
=======
>>>>>>> 00ddb6b6c1e3c05429ef500c0f90151e1fe71737

        }
}


