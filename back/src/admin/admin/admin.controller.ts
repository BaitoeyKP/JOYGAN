import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe ,Request } from '@nestjs/common';
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
        AdminLogin(@Body() body: { username: string; pass: string }){
            return this.adminService.loginAdmin(body.username,body.pass)
        }

       
        @Get('/code')
        @UseGuards(AuthGuard) 
        async getRestaurantCodeByUsername() {
            const adminUsername = 'admin_username_here'; 
            const code = await this.adminService.getCodeByUsername(adminUsername); 
            return { code };
        } 

        @Get('/Expire')
        @UseGuards(AuthGuard) 
        async getExpireByUsername() {
            const adminUsername = 'admin_username_here'; 
            const code = await this.adminService.getCodeByUsername(adminUsername); 
            return { code };
        } 

        @Get('/daily-summary')
        @UseGuards(AuthGuard)
        async getDailyIncomeSummary(@Request() req) {
            const { total, morethan, morethanper } = await this.adminService.calculateDailySummary(req.user);

            return {
                    total,
                    morethan,
                    morethanper,
                 };
            }

       

}


