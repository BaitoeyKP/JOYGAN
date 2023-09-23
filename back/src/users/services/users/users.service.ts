import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
//import { Content } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private globalObject: any = {};
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
       // @InjectRepository(Content) private readonly contentRepository: Repository<Content>
      ) {}
          
    /*  createUser(createUserDto: CreateUserDto) {   // make user
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
      }  */   // maiout

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
    
      getQr(code:any){
        const thiscode = code["code"]
    
        // Get qr picture from db with thiscode with qrpath (str)
        const qrpath = "bbb"
    
        return qrpath
    
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
