import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
      ) {}
    
      
    async create(adminData: Partial<Admin>): Promise<Admin> {
        const admin = this.adminRepository.create(adminData);
        return this.adminRepository.save(admin);
    }

    async findOne(username: string): Promise<Admin | undefined> {
        return this.adminRepository.findOne({ where: { admin_username: username } });
    }
    
}
