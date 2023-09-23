import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
          
      createUser(createUserDto: CreateUserDto) {   // make user
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
      }

      getUsers() {   // find all
        return this.userRepository.find();
      }
          
      async findUsersById(id: number) {   // find id frist meet
        return await this.userRepository.findOne({
            where: { id },
        });
      }
}
