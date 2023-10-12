import { Controller, Delete, Get, Param, Patch, UseGuards ,Request} from '@nestjs/common';
import { contentType } from './interface/content.interface';
import { ContentService } from './content.service';
import { AuthGuard } from '../auth/auth.guard';
import { Content } from 'src/typeorm';

@Controller('admin/content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}
    
    @UseGuards(AuthGuard)
    @Get('show')
    async getShowContent(@Request() req):Promise<Content>{
        return await this.contentService.getShowContent(req.user.uuid);
    }

    @UseGuards(AuthGuard) 
    @Get('top-donators')
    getTopDonators() {
    const topDonators =  this.contentService.getTopDonators(); 
    return topDonators;

    }

    @UseGuards(AuthGuard) 
    @Get('summary-donate')
    async getDonateToday() {
    //console.log(this.contentService.getTodayTotalAmount);
    const totalToday = await this.contentService.getTodayTotalAmount() || 0;
    const totalYesterday = await this.contentService.getYesterdayTotalAmount()||0;
    const morethan  = totalToday -totalYesterday;
    const percentage = totalYesterday !== 0 ? ((totalToday - totalYesterday) / totalYesterday) * 100 : 0;

    
    return {
        totalToday,
        morethan,
        percentage
    }
}

@UseGuards(AuthGuard) 
@Get('summary-yesterday')
async getDonateYesterday() {
    //console.log(this.contentService.getTodayTotalAmount);
    
    return await this.contentService.getYesterdayTotalAmount() ; 
}


    @UseGuards(AuthGuard)
    @Get('queue')
    async getQueueContent(@Request() req):Promise<Content[]> {
        return await this.contentService.getQueueContent(req.user.uuid);
    }


    @UseGuards(AuthGuard)
    @Get('donations-by-day')
    async getDonationsByDay(): Promise<{ date: string; totalDonations: number }[]> {
      return this.contentService.getDonationsByDay();
    }
    
    @Delete('show')
    async deleteShowContent(@Request() req){
        await this.contentService.deleteShowContent(req.user.uuid);
    }

    @UseGuards(AuthGuard)
    @Patch('show/:text')
    async patchShowContent(@Request() req,@Param('text')text:string):Promise<Content>{
        return await this.contentService.patchShowContent(req.user.uuid,text);
    }

    @UseGuards(AuthGuard)
    @Delete('queue/:id')
    async deleteQueueContent(@Param('id')id:string){
        await this.contentService.deleteQueueContent(id);
    }

    @UseGuards(AuthGuard)
    @Patch('queue/:id/:text')
    async patchQueueContent(@Param('id')id:string,@Param('text')text:string):Promise<Content>{
        return await this.contentService.patchShowContent(id,text);
    }


    

}
