import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from '../admin/dto/CreateAdmin.dto';


@Injectable()
export class AdminService {
 
  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,   
  ){}

  
  
  async createAdmin(createAdminDto:CreateAdminDto) : Promise<Admin>{
    const newAdmin = await this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }



}
