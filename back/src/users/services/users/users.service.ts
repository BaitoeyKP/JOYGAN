import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Admin } from 'src/typeorm';
import { Content } from 'src/typeorm';
import { LogUser } from 'src/typeorm/log.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateLogDto } from 'src/users/dtos/Createlog.dto';

@Injectable()
export class UsersService {
  private globalObject: any = {};
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
       // @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
      // @InjectRepository(Content) private readonly contentRepository: Repository<Content>,
       @InjectRepository(LogUser) private readonly logRepository: Repository<LogUser>
      ) {}
          

      getUsers() {   // find all
        return this.userRepository.find();
      }
          
      async findUsersById(id: number) {   // find id frist meet
        return await this.userRepository.findOne({
            where: { id },
        });
      }


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
      }

      async createLog(createlogDto: CreateLogDto) : Promise<LogUser> {   // make Log
        const newLog = await this.logRepository.create(createlogDto);
        return await this.logRepository.save(newLog);
      } 
    
      messagereq(messagereq:any){
        
        const message = messagereq["message"]
        const time = messagereq["time"]
        //const picture = messagereq["picture"]
        
        const msgform = {
          message: message,
          time: time,
          // donate : donate,
          // timestamp : timstamp, //no
      //  picture: picture, //string
        //  state : 'queue'  //no
        }
      }
    
      async getQr(code:any){
        const thiscode = code["code"]
    
        //get telephone num from code in db admin

        const tel = "0962310140"

        const generatePayload = require('promptpay-qr')
        const qrcode = require('qrcode')

        //format telephone
        const formatTel = `${tel.slice(0,3)}-${tel.slice(3,6)}-${tel.slice(6)}`

        //how much 
        const amount = 0
        const payload = generatePayload(formatTel, {amount})

        const option = { type: 'png', color:{ dark: '#000', light:'#fff'}}
        const qrname = `./qr_${tel}.png`
        qrcode.toFile(qrname, payload, option, (err, svg) => {
          if (err) return console.log(err)
          console.log('save png')
        })
        
        return qrname
    
      }
    
      cancel(){
        // Delete global obj

      }
    
      async queue(uid:any){
    
        const id = uid["uid"]
       // let contentob = await this.contentRepository.findOne({ where: { id } });

        // Get number of queue before this uid
    
        const queue = 0
    
        return queue
      }


     /* 
      payment(){
        // Check pay status
        const paycheck = true
    
        // Delete global obj
    
        return paycheck
      } */  // maioutleaw
}
