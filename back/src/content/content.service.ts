import { Injectable ,Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Content } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
  constructor(@InjectRepository(Content) private repositoryContent: Repository<Content>, @InjectRepository(Content) private repositoryAdmin: Repository<Admin>) { }

  async getShowContent(uuid: string): Promise<Content> {

    return await this.getTopQueue(uuid);
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
    async getTopDonators(): Promise<{ id: String; totaldonate: number }[]> {
        const topDonators = await this.repositoryContent
          .createQueryBuilder('user')
          .select(['user.id', 'SUM(user.donate) as totaldonate'])
          .groupBy('user.id')
          .orderBy('totaldonate', 'DESC')
          .limit(10)
          .getRawMany();
    
        return topDonators;
      }

}
