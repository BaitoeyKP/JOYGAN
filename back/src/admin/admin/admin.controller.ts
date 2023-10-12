import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe ,Request, UnauthorizedException, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from '../admin/dto/CreateAdmin.dto';
import { AuthGuard } from 'src/auth/auth.guard';


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
        AdminLogin(@Body('username') username: string,@Body('password') password: string){
            console.log(username,password);
            
            const user =  this.adminService.loginAdmin(username,password)
           return user;
        }

       
        @UseGuards(AuthGuard) 
        @Get('getcode')
        async getAdminCode() {
            const code = await this.adminService.getCode();
            if (code === null) {
            
                return { error: 'Admin not found' };
            }
                 return { code };
        }
        

        @UseGuards(AuthGuard) 
        @Get('Expire')
        async getExpire() {
            const expire = await this.adminService.getExpire();
            if (expire === null) {
            
                return { error: 'Admin not found' };
            }
                 return { expire };
        }
        
       

       

}


