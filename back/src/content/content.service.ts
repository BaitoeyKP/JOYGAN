import { Injectable ,Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
    constructor(@InjectRepository(Content) private repository: Repository<Content>){
        
    }

    async getTopDonators(): Promise<{ id: String; totaldonate: number }[]> {
        const topDonators = await this.repository
          .createQueryBuilder('user')
          .select(['user.id', 'SUM(user.donate) as totaldonate'])
          .groupBy('user.id')
          .orderBy('totaldonate', 'DESC')
          .limit(10)
          .getRawMany();
    
        return topDonators;
      }

}
