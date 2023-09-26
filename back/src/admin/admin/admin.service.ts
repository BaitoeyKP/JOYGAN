import { forwardRef,Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from '../dto/CreateAdmin.dto';


@Injectable()
export class AdminService {
 
  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,   
  ){}

  
  
  createAdmin(createAdminDto:CreateAdminDto){
    const newAdmin = this.adminRepository.create(createAdminDto)
    return this.adminRepository.save(newAdmin)
  }

}
