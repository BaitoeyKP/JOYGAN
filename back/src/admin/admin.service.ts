import { Injectable } from '@nestjs/common';
import { Repository  } from 'typeorm';
import { Admin } from './admin.entity';
import { RegisterAdminDto } from './dto/register-admin.dto/register-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
      ) {}
    
      async registerAdmin(registerAdminDto: RegisterAdminDto): Promise<Admin> {
        const { username, password } = registerAdminDto;
        const admin = this.adminRepository.create({ username, password });
        return await this.adminRepository.save(admin);
      }
    
      async findByUsername(username: string): Promise<Admin | undefined> {
        return this.adminRepository.findOne({ where: { username } });
      }
}
