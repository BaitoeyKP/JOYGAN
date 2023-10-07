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
    const query = `
      SELECT
        DATE_TRUNC('day', date) as date,
        SUM(amount) as totalDonations
      FROM log_user
      WHERE DATE_TRUNC('day', date) >= DATE_TRUNC('day', NOW() - INTERVAL '10 days')
      GROUP BY date
      ORDER BY date DESC -- นี่คือการเรียงลำดับวันล่าสุดขึ้นก่อน
    `;
  
    const result = await this.logUserRepository.query(query);
    return result;
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

      
      async getTodayTotalAmount(): Promise<number> {
        const query = `

          SELECT SUM(amount) AS totalAmount
          FROM log_user
          WHERE date >= DATE_TRUNC('day', NOW()) AND date < DATE_TRUNC('day', NOW() + INTERVAL '1 day')
        
          `;
    
        const result = await this.logUserRepository.query(query);
        console.log(result);
        
        return parseInt(result[0].totalamount);
      }

      async getYesterdayTotalAmount(): Promise<number> {
        const query = `
          SELECT SUM(amount) AS totalAmount
          FROM log_user
          WHERE date >= DATE_TRUNC('day', NOW() - INTERVAL '1 day')
            AND date < DATE_TRUNC('day', NOW())
        `;
      
        const result = await this.logUserRepository.query(query);
        console.log(result);
      
        return parseInt(result[0].totalamount);
      }
      
}


