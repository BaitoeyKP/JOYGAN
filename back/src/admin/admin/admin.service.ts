import { Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/admin.entity';
import { Repository ,Equal} from 'typeorm';
import { CreateAdminDto } from '../admin/dto/CreateAdmin.dto';
import { JwtService } from '@nestjs/jwt';
import { LogUser } from 'src/typeorm';
import { access } from 'fs';


@Injectable()
export class AdminService {
 
  constructor(
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
    @InjectRepository(LogUser) private readonly LogUserRepository : Repository<LogUser>,
    private jwtService: JwtService 
  ){}

  
  
  async createAdmin(createAdminDto:CreateAdminDto) : Promise<Admin>{
    const newAdmin = await this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  async loginAdmin(username, pass) : Promise<{access_token:string}>{
    console.log(pass);
  

    const adminUser = await this.adminRepository.findOne({
      where:{
        admin_username:username
      }
   });
   console.log(adminUser.admin_password);
    if (adminUser?.admin_password !== pass) {
      throw new UnauthorizedException();
    }
    
    if (adminUser && adminUser.id){

      const payload = { uuid: adminUser.id};
      return {
        access_token: await this.jwtService.signAsync(payload)
       
      };
    }
    else{
      console.log( adminUser.id);
    }
  }




  async calculateDailySummary(userId: number) {
   
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        

        
        const incomeToday = await this.LogUserRepository.find({
        where: {
            id: userId,
            date: Equal(today)
        },
        });
        
        const incomeYesterday = await this.LogUserRepository.find({
        where: {
            id: userId,
            date: Equal(yesterday )
        },
        });

        
        let totalIncomeToday = 0;
        for (const income of incomeToday) {
        totalIncomeToday += income.amount;
        }

        
        let totalIncomeYesterday = 0;
        for (const income of incomeYesterday) {
        totalIncomeYesterday += income.amount;
        }

        
        const morethan = totalIncomeToday - totalIncomeYesterday;
        const morethanper = (morethan / totalIncomeYesterday) * 100;
        console.log(morethan);
        
        return {
        total: totalIncomeToday,
        morethan: morethan,
        morethanper: morethanper,
        };
    }

    async getCodeById(adminId: string): Promise<string | null> {
      const admin = await this.adminRepository.findOne({where:{ id: adminId }});
      return admin ? admin.code : null;
    }


    async getCode(): Promise<string | null> {
  
      const admin = await this.adminRepository.find();
      const admins = admin.length > 0 ? admin[0] : null;
      return admins ? admins.code : null;
    }

    async getExpireById(adminId: string): Promise<number| null> {
      const admin = await this.adminRepository.findOne({where:{ id: adminId }});
      return admin ? admin.expire : null;
    }

    async getExpire(): Promise<number| null> {
  
      const admin = await this.adminRepository.find();
      const admins = admin.length > 0 ? admin[0] : null;
      return admins ? admins.expire : null;
    }
    

}
