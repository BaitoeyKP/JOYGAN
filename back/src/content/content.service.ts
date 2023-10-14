import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Content, LogUser, User } from 'src/typeorm';
import { Repository, MoreThanOrEqual, LessThan } from 'typeorm';

@Injectable()
export class ContentService {
  constructor(@InjectRepository(Content) private repositoryContent: Repository<Content>,
    @InjectRepository(Admin) private repositoryAdmin: Repository<Admin>,
    @InjectRepository(LogUser) private logUserRepository: Repository<LogUser>,) { }

  async getShowContent(uuid: string): Promise<Content> {
    try {
      const res = await this.getTopQueue(uuid);
      // console.log(res,555555555555555555555555);

      return res;
    } catch (error) {

    }
  }

  async deleteShowContent(uuid: string) {

    const Content = await this.getTopQueue(uuid);
    await this.repositoryContent.remove(Content);
  }

  async patchShowContent(uuid: string, text: string): Promise<Content> {
    const Content = await this.getTopQueue(uuid);
    // console.log(Content,11111111);

    Content.text = text;
    return await this.repositoryContent.save(Content);
  }

  async getQueueContent(uuid: string): Promise<Content[]> {
    this.getTopQueue(uuid);
    console.log(uuid);
    const admin = await this.repositoryAdmin.findOne({
      where: {
        id: uuid
      }
    })
    const Content = await this.repositoryContent.find({
      where: {
        admin: admin,
        state: "queue"
      }, relations: ['user']
    });

    return Content
  }

  async deleteQueueContent(uuid: string) {
    const Content = await this.getTopQueue(uuid);
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


    try {
      const admin = await this.repositoryAdmin.findOne({
        where: {
          id: uuid
        }
      })
      // console.log(admin,'getTopQueue');

      const Content = await this.repositoryContent.find({
        where: {
          admin: admin,
        }, relations: ['user']
      })
      // console.log(Content,'getTopQueue_content');
      Content.sort((a, b) => a.time_stamp < b.time_stamp ? -1 : a.time_stamp < b.time_stamp ? 1 : 0)
      Content[0].state = 'show';
      this.repositoryContent.save(Content[0]);
      return Content[0];
    } catch (error) {
      return null
    }
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
        date AT TIME ZONE 'UTC' AT TIME ZONE '+7',
        SUM(amount) as totalDonations
      FROM log_user
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
          
        `;
    const topDonators = await this.logUserRepository.query(query);



    return topDonators;
  }


  async getTodayTotalAmount(): Promise<number> {
    const query = `

          SELECT SUM(amount) AS totalAmount
          FROM log_user
          WHERE date >= DATE_TRUNC('day', NOW()) 
            AND date < DATE_TRUNC('day', NOW() + INTERVAL '1 day')
          `;

    const result = await this.logUserRepository.query(query);
    //console.log(result);

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
    // console.log(result);

    return parseInt(result[0].totalamount);
  }

}


