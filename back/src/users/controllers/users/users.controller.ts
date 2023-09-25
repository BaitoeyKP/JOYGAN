import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
    import { CreateLogDto } from 'src/users/dtos/Createlog.dto';
    import { UsersService } from 'src/users/services/users/users.service';
    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      @Get()
      getUsers() {    // get allUser
        return this.userService.getUsers();
      }
      
      @Get('id/:id')  // check id
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }
      
  
        // add ver 2

      @Get('/pay/cancel')
        async cancel(){
          return this.userService.cancel()
      }

      @Get('/queue')
        getQueue(@Body() uid:any) {
        return this.userService.queue(uid);
      }

    /*  @Get('/pay/getpay')
      async payment(){
      return this.userService.payment()
      }*/ 

      @Post('/pay/getqr')  // post 
      async getQR(@Body() code: any){
         return this.userService.getQr(code)
      }

      @Post('/login')
      @UsePipes(ValidationPipe)
      async login(@Body() createUserDto: CreateUserDto){
        const userId = await this.userService.saveUsertoDB(createUserDto)
        return {id : userId.id} ;
      }  // palm OK

      @Post('/createlog')  
      @UsePipes(ValidationPipe)
      async createLog(@Body() createlogDto: CreateLogDto) {
        return await this.userService.createLog(createlogDto);
      }

      @Post('/req')
       messagereq(@Body() messagereq: any){
        return this.userService.messagereq(messagereq)
    } 

    }