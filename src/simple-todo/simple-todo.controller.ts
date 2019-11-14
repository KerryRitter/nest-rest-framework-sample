import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { RestController } from '../../../nest-rest-framework/src';
import { SimpleTodoViewset } from './simple-todo.viewset';
import { SimpleTodoItem } from './simple-todo.model';

@Controller()
export class SimpleTodoController extends RestController<
  number,
  SimpleTodoItem,
  SimpleTodoItem,
  SimpleTodoItem
> {
  constructor(viewset: SimpleTodoViewset) {
    super({
      viewset,
    });
  }
}
