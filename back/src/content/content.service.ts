import { Injectable ,Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Content, LogUser, User } from 'src/typeorm';
import { Repository ,MoreThanOrEqual, LessThan} from 'typeorm';

@Injectable()
export class ContentService {
  constructor(@InjectRepository(Content) private repositoryContent: Repository<Content>,
               @InjectRepository(Content) private repositoryAdmin: Repository<Admin>,
               @InjectRepository(Content) private logUserRepository: Repository<LogUser>,) 
               { }

  async getShowContent(uuid: string): Promise<Content> {
    try {
      return await this.getTopQueue(uuid);
    } catch (error) {
      
    }
  }

  async deleteShowContent(uuid: string) {

    const Content = await this.getTopQueue(uuid);
    await this.repositoryContent.remove(Content);
  }

  async patchShowContent(uuid: string, text: string): Promise<Content> {
    const Content = await this.getTopQueue(uuid);
    Content.text = text;
    return await this.repositoryContent.save(Content);
  }

  async getQueueContent(uuid: string): Promise<Content[]> {
    const Content = await this.repositoryContent.find({
      where: {
        id: uuid,
        state: "queue"
      }
    });
    return Content
  }

  async deleteQueueContent(uuid: string) {
    const Content = await this.repositoryContent.findOne({
      where: {
        id: uuid,
      }
    });
    await this.repositoryContent.remove(Content);
  }

  async patchQueueContent(uuid: string, text: string): Promise<Content> {
    const Content = await this.repositoryContent.findOne({
      where: {
        id: uuid,
      }
    });
    Content.text = text;
    return await this.repositoryContent.save(Content);
  }

  async getTopQueue(uuid: string): Promise<Content> {
    console.log(uuid);
    const admin = await this.repositoryAdmin.findOne({
      where: {
        id: uuid
      }
    })
    console.log(admin);
    
    const Content = await this.repositoryContent.find({
      where: {
        admin: admin,
      }
    })
    Content.sort((a, b) => a.time_stamp < b.time_stamp ? -1 : a.time_stamp < b.time_stamp ? 1 : 0)
    return Content[0];
  }

  async getQueue(uuid: string, idcontent: string): Promise<number> {
    const admin = await this.repositoryAdmin.findOne({
      where: {
        id: uuid
      }
    })
    const Content = await this.repositoryContent.find({
      where: {
        admin: admin,
      }
    })
    Content.sort((a, b) => a.time_stamp < b.time_stamp ? -1 : a.time_stamp < b.time_stamp ? 1 : 0)
    return Content.findIndex((x) => x.id == idcontent)
  }


  

 
      async getDonationsByDay(): Promise<{ date: string; totalDonations: number }[]> {
        const query = this.repositoryContent
          .createQueryBuilder('content')
          .select("DATE_TRUNC('day', TIMESTAMP WITH TIME ZONE 'epoch' + content.time_stamp * INTERVAL '1 second') as date")
          .addSelect('SUM(content.donate) as totalDonations')
          .groupBy('date')
          .orderBy('date', 'ASC')
          .getRawMany();
    
        return query
      }

      async getTopDonators(): Promise<{ username: string; totalAmount: number }[]> {
        const query = `
          SELECT logUser.username, SUM(logUser.amount) as totalAmount
          FROM log_user logUser
          GROUP BY logUser.username
          ORDER BY totalAmount DESC
          LIMIT 10
        `;
        const topDonators = await this.logUserRepository.query(query);
    
        return topDonators;
      }

      async getDailyTotalAmount(): Promise<number> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
    
        const dailyTotal = await this.logUserRepository
          .createQueryBuilder('logUser')
          .select('SUM(logUser.amount)', 'totalAmount')
          .where('logUser.date >= :today', { today })
          .andWhere('logUser.date < :tomorrow', { tomorrow })
          .getRawOne();
    
        return dailyTotal ? dailyTotal.totalAmount : 0;
      }
}


