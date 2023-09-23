import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
    constructor(@InjectRepository(Content) private repository: Repository<Content>){}

}
