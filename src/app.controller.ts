import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RestController } from '../../nest-rest-framework/src';

interface TodoItemData {
  id: string;
  description: string;
  complete: string;
}
interface TodoItemDto {
  id: string;
  description: string;
  complete: string;
}

@Controller()
export class AppController extends RestController<
  string,
  TodoItemData,
  TodoItemDto,
  TodoItemDto
> {
  constructor(private readonly appService: AppService) {
    super({
      viewset: null,
    })
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
