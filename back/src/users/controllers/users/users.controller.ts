import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UnauthorizedException,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
    import { CreateLogDto } from 'src/users/dtos/Createlog.dto';
    import { CreateAdminDto } from 'src/users/dtos/CreateAdmin.dto';
    import { CreateContentDto } from 'src/users/dtos/CreateContent.dto';
    import { UsersService } from 'src/users/services/users/users.service';
    import { UUID } from 'crypto';
    import { ContentService } from 'src/content/content.service';

    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService,private readonly contentService: ContentService) {}
      
      @Get()
      getUsers() {    // get allUser
        return this.userService.getUsers();
      } // palm OK
    
      @Get('id/:id')  // check id
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }  // palm OK
      
      @Get('/pay/cancel')
        async cancel(){
          return this.userService.cancel()
      }  // wait palm

      @Post('/queue')
        getQueue(@Body() uid:any) {
        return this.userService.queue(uid);
      } // wait palm

      @Post('/pay/getqr')  // post 
      async getQR(@Body() code: any ){
         return this.userService.getQr(code);
      }  // palm OK

      @Post('/getidshop')  // post 
      async getidshop(@Body() code: any ){
        const shopid = await this.userService.getuuidshop(code);
        return {id : shopid}
     } 

      @Post('/pay/checkcode')  // post 
      async codeshop(@Body() code: any ){
         const chcode = await this.userService.codeshop(code);
         if (!chcode){
          return { message: 'Unsuccessful'};
         }
         else{
          return { message: 'successful'};
        }
      }


      @Post('/login')
      async login(@Body() { username, password }: { username: string; password: string }) {
        const user = await this.userService.validateUser(username, password);
        if (!user) {
          throw new UnauthorizedException('Invalid credentials');
        }
        return { message: 'Login successful', id : user.id };
      } // palm OK

      @Post('/register')
      @UsePipes(ValidationPipe)
      async register(@Body() createUserDto: CreateUserDto){
        const userId = await this.userService.saveUsertoDB(createUserDto)
        return {id : userId.id} ;
      }  // palm OK

      @Post('/createlog')  
      @UsePipes(ValidationPipe)
      async createLog(@Body() createlogDto: CreateLogDto) {
        return await this.userService.createLog(createlogDto);
      } // palm OK

      
      @Post('/createadmin')  
      @UsePipes(ValidationPipe)
      async createAdmin(@Body() createadminDto: CreateAdminDto) {
        return await this.userService.createAdmin(createadminDto);
      } // palm OK tester
      

      @Post('/createcontent')  
      @UsePipes(ValidationPipe)
      async createContent(@Body() createcontentDto: CreateContentDto) {
        return await this.userService.createContent(createcontentDto);
      } // palm OK  

      @Post('/req')
      @UsePipes(ValidationPipe)
      async messagereq(@Body() createcontentDto: CreateContentDto){
       const CT = await this.userService.savemessage(createcontentDto);
        return  {id : CT.id}
      }  

    }