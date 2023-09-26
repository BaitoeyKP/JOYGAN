import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { contentType } from './interface/content.interface';
import { ContentService } from './content.service';

@Controller('admin/content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}
    @Get('show')
    getShowContent():contentType{
        return
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


