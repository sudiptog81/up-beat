import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/s')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/cron')
  startCron(): string {
    return this.appService.startCron();
  }
}