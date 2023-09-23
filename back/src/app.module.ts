import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/admin.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    // กำหนดการเชื่อมต่อฐานข้อมูล PostgreSQL
    type: 'postgres', // ประเภทของฐานข้อมูล
      host: 'localhost', // โฮสต์ของฐานข้อมูล
      port: 5432, // พอร์ตของฐานข้อมูล
      username: 'admin_username', // ชื่อผู้ใช้ของฐานข้อมูล
      password: 'admin_password', // รหัสผ่านของฐานข้อมูล
      database: 'database', // ชื่อฐานข้อมูล
      entities: [Admin], // Entities ที่สร้าง
      synchronize: true, // ซิงโครไนซ์ Entity กับฐานข้อมูล (ใช้ในระยะพัฒนา)
  }),
  AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
