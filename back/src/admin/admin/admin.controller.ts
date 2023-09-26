import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from 'src/typeorm/admin.entity';


@Controller('admin/user')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('register')
    async register(@Body() adminData: Partial<Admin>) {
        // ตรวจสอบว่ามีผู้ดูแลระบบที่มีชื่อผู้ใช้เหมือนกันหรือไม่
        const existingAdmin = await this.adminService.findOne(adminData.admin_username);
        if (existingAdmin) {
            return { message: 'ชื่อผู้ใช้นี้ถูกใช้แล้ว' };
        }

        // สร้างผู้ดูแลระบบใหม่และบันทึกลงในฐานข้อมูล
        const admin = await this.adminService.create(adminData);
        return { message: 'ลงทะเบียนสำเร็จ', admin };
    }

}


