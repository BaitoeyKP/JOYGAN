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
import path from 'path';
import * as fs from 'fs';
import { ContentService } from 'src/content/content.service';
//import { ContentService } from 'src/content/content.service';
//import { ContentService } from 'src/content/content.service';


@Injectable()
export class UsersService {
  private globalObject: any = {};
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
       @InjectRepository(Content) private readonly contentRepository: Repository<Content>,
       @InjectRepository(LogUser) private readonly logRepository: Repository<LogUser> ,
       private contentService: ContentService
       ) {}
          

      async getUsers() {   // find all
       // return await this.userRepository.find();
       // return await this.contentRepository.find();
       return await this.adminRepository.find();
      } // palm OK
          
      async findUsersById(id: number) {   // find id frist meet
        return await this.userRepository.findOne({
            where: { id },
        });
      } // palm OK


      // add ver 2

      async saveUsertoDB(createUserDto: CreateUserDto): Promise<User>{
        
      const { username } = createUserDto;

      // Check if a user with the same username already exists
      const existingUser = await this.userRepository.findOne({ where: { username } });
    
      if (existingUser) {
        throw new Error('Username is already taken'); // Username is already used
      }
    
      // Create a new user since the username is not taken
      const newUser = this.userRepository.create(createUserDto);
      const savedUser = await this.userRepository.save(newUser);
      return savedUser;

               
        //Save to Database  palm o
      }  // palm OK

      async createLog(createlogDto: CreateLogDto) : Promise<LogUser> {   // make Log
        const newLog = await this.logRepository.create(createlogDto);
        return await this.logRepository.save(newLog);
      }      //Save Log to Database  palm ok

      async createAdmin(createadminDto: CreateAdminDto) : Promise<Admin> {   // make admin
        const newAd = await this.adminRepository.create(createadminDto);
        return await this.adminRepository.save(newAd);
      }      //Save Log to Database  palm ok tester


      async getuuidshop(code:any){

        const thiscode = code["code"]

        const shop = await this.adminRepository.findOne({
          where: { code :  thiscode },
      });
      return shop.id
      }

      async createContent(createcontentDto: CreateContentDto) : Promise<Content> {   // make content

        const currentTime = Date.now();
        //console.log(currentTime.getHours);
        //createcontentDto.time_stamp = +(String(currentTime.getHours)+String(currentTime.getMinutes)+String(currentTime.getSeconds));
        createcontentDto.time_stamp = Math.floor(currentTime / 1000);
        console.log(createcontentDto.adminId);
        console.log(createcontentDto.userId);

        const newCon = await this.contentRepository.create(createcontentDto);
        return await this.contentRepository.save(newCon);
      }      //Save Log to Database  palm ok 

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

        try {
          // Decode the Base64 string
          const decodedImage = Buffer.from(createcontentDto.pic, 'base64');
          
          const name = `./PicContent/con_${createcontentDto.time_stamp}.png`
          // Write the decoded data to the file
          fs.writeFileSync(name, decodedImage);
          createcontentDto.donate = 500; 
          createcontentDto.time_display = 100;
          createcontentDto.time_stamp = 10 ;
          
          createcontentDto.pic = name;

          console.log('save Content');
          const newCon = await this.contentRepository.create(createcontentDto);
          await this.contentRepository.save(newCon); 
          console.log(newCon.time_stamp);
          return  newCon;
          
          //return { message: 'Image uploaded and saved successfully' };
        } catch (error) {
          throw new Error('Error uploading image');
        }
      
      }  
    
      async getQr(code:any ){
        const thiscode = code["code"]
        const amount = parseInt(code["amount"])
        const stramount = code["amount"]

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
        const qrname = `./QRpic/qr_${stramount}_${tel}.png`
        qrcode.toFile(qrname, payload, option, (err, svg) => {
          if (err) return console.log(err)
          console.log('save png')
        })
        //const imagePath = path.join(__dirname, '/QRpic/qr_${stramount}_${tel}.png')
        const imageBuffer = fs.readFileSync(qrname, {encoding: 'base64'})
        //console.log(imageBuffer)
        return imageBuffer
        //return qrname
       }
       else {
        console.log("something worng!");
        return shop
       }
      }

      async codeshop(code:any ){
        const thiscode = code["code"]
    

        const shop = await this.adminRepository.findOne({
          where: { code :  thiscode },
      });
      return shop

    }
    
      cancel(){
        // Delete global obj

      }
    
      async queue(uid:any) {
        //const contentService = new ContentService();
        const codeshop = uid["code"]
        const iduser = uid["iduser"]

        const admin = await this.adminRepository.findOne({
          where: {
            code: codeshop,
          }
        });

        // const Qid = uid["id"]
        // console.log(Qid)
        // const contentob = await this.contentRepository.findOne({ where: { id : Qid } });

        // if (!contentob) {
        //   throw new Error(`Content with ID ${Qid} not found.`);
        // }
        // console.log(contentob.time_stamp);
       
        // const recordsBeforeDate = await this.contentRepository.count({
        //   where: {
        //     time_stamp : LessThan(contentob.time_stamp),
        //   },
        // });
        // console.log(recordsBeforeDate)

        // const queue = recordsBeforeDate+1;

        // return queue
        const ret = await this.contentService.getQueue(admin.id,iduser);
        const stringNumber = ret.toString();
        return stringNumber;
      }
}
function stringToUUID(id: string): `${string}-${string}-${string}-${string}-${string}` {
  throw new Error('Function not implemented.');
}

