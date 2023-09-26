import { Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from '../admin/dto/CreateAdmin.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AdminService {
 
  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,private jwtService: JwtService 
  ){}

  
  
  async createAdmin(createAdminDto:CreateAdminDto) : Promise<Admin>{
    const newAdmin = await this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  async loginAdmin(username, pass) : Promise<{access_token:string}>{
    const user = await this.adminRepository.findOne(username);
    if (user?.admin_password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { uuid: user.id};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }



}
