import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Admin } from 'src/typeorm';
import { Content } from 'src/typeorm';
import { LogUser } from 'src/typeorm/log.entity';
import { Repository , LessThan} from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateLogDto } from 'src/users/dtos/Createlog.dto';
import { CreateAdminDto } from 'src/users/dtos/CreateAdmin.dto';
import { CreateContentDto } from 'src/users/dtos/CreateContent.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


@Injectable()
export class UsersService {
  private globalObject: any = {};
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
       @InjectRepository(Content) private readonly contentRepository: Repository<Content>,
       @InjectRepository(LogUser) private readonly logRepository: Repository<LogUser>
      ) {}
          

      async getUsers() {   // find all
       // return await this.userRepository.find();
        return await this.contentRepository.find();
      } // palm OK
          
      async findUsersById(id: number) {   // find id frist meet
        return await this.userRepository.findOne({
            where: { id },
        });
      } // palm OK


      // add ver 2

      async saveUsertoDB(createUserDto: CreateUserDto): Promise<User>{
        
        const { username } = createUserDto;

        let user = await this.userRepository.findOne({ where: { username } });

        if(!user ){
          const newUser = this.userRepository.create(createUserDto);
          user = await this.userRepository.save(newUser);
        }

        console.log(createUserDto.username)
        //Save to Database  palm ok
    
        return user;
      }  // palm OK

      async createLog(createlogDto: CreateLogDto) : Promise<LogUser> {   // make Log
        const newLog = await this.logRepository.create(createlogDto);
        return await this.logRepository.save(newLog);
      }      //Save Log to Database  palm ok

      async createAdmin(createadminDto: CreateAdminDto) : Promise<Admin> {   // make admin
        const newAd = await this.adminRepository.create(createadminDto);
        return await this.adminRepository.save(newAd);
      }      //Save Log to Database  palm ok tester

      async createContent(createcontentDto: CreateContentDto) : Promise<Content> {   // make content
        const newCon = await this.contentRepository.create(createcontentDto);
        return await this.contentRepository.save(newCon);
      }      //Save Log to Database  palm ok tester

      async findByUsername(username: string): Promise<User | undefined> {
        return  await this.userRepository.findOne({
          where: { username },
      });
      } // palm OK
    
      async validateUser(username: string, password: string): Promise<User | undefined> {
        const user = await this.findByUsername(username);
        if (user && user.password === password) {
          return user;
        }
        return undefined;
      } // palm OK
    
      async savemessage(createcontentDto: CreateContentDto) : Promise<Content> {
        //createcontentDto.time_stamp = 
        const newCon = await this.contentRepository.create(createcontentDto);
        await this.contentRepository.save(newCon); 
        console.log(newCon.time_stamp);
        return  newCon;
      }  
    
      async getQr(code:any ){
        const thiscode = code["code"]
        const amount = code["amount"]

        const shop = await this.adminRepository.findOne({
          where: { code :  thiscode },
      });
      
      if(shop){
        const tel = shop.tel 

        const generatePayload = require('promptpay-qr')
        const qrcode = require('qrcode')

        const formatTel = `${tel.slice(0,3)}-${tel.slice(3,6)}-${tel.slice(6)}`
      
        const payload = generatePayload(formatTel, {amount})
       
        const option = { type: 'png', color:{ dark: '#000', light:'#fff'}}
        const qrname = `./QRpic/qr_${amount}_${tel}.png`
        qrcode.toFile(qrname, payload, option, (err, svg) => {
          if (err) return console.log(err)
          console.log('save png')
        })
        return qrname
       }
      }
    
      cancel(){
        // Delete global obj

      }
    
      async queue(uid:any) : Promise<number>{
    
        const Qid = uid["id"]
        console.log(Qid)
        const contentob = await this.contentRepository.findOne({ where: { id : Qid } });

        if (!contentob) {
          throw new Error(`Content with ID ${Qid} not found.`);
        }
        console.log(contentob.time_stamp);
       
        const recordsBeforeDate = await this.contentRepository.count({
          where: {
            time_stamp : LessThan(contentob.time_stamp),
          },
        });
        console.log(recordsBeforeDate)

        const queue = recordsBeforeDate+1;

        return queue
      }
}
