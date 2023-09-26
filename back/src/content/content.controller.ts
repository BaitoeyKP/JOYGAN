import { Controller, Delete, Get, Param, Patch, UseGuards ,Request} from '@nestjs/common';
import { contentType } from './interface/content.interface';
import { ContentService } from './content.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('admin/content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}
    
    @UseGuards(AuthGuard)
    @Get('show')
    getShowContent(@Request() req){
        return req.user;
    }

    @Delete('show')
    deleteShowContent(){
        return
    }

    @Patch('show/:text')
    patchShowContent(@Param('text')text:string){
        return text;
    }

    @Get('queue')
    getQueueContent():contentType[]{
        return
    }

    @Delete('queue/:id')
    deleteQueueContent(@Param('id')id:string){
        return
    }

    @Patch('queue/:id/:text')
    patchQueueContent(@Param('id')id:string,@Param('text')text:string){
        return
    }

    

}


