// src/admin/admin.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { RegisterAdminDto } from './dto/register-admin.dto/register-admin.dto';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  async registerAdmin(@Body() registerAdminDto: RegisterAdminDto) {
    // ตรวจสอบว่า Username ไม่ซ้ำกับ ADMIN อื่น
    const existingAdmin = await this.adminService.findByUsername(
      registerAdminDto.username,
    );
    if (existingAdmin) {
      throw new Error('Username already exists');
    }

    // สร้าง ADMIN ใหม่
    return this.adminService.registerAdmin(registerAdminDto);
  }
}
