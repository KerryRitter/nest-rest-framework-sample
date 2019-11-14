import { Injectable } from "@nestjs/common";
import { ViewSet, ViewSetQuery } from "../../../nest-rest-framework/src";
import { SimpleTodoItem } from './simple-todo.model';

@Injectable()
export class SimpleTodoViewset extends ViewSet<number, SimpleTodoItem> {
    query(query?: ViewSetQuery): SimpleTodoItem[] | Promise<SimpleTodoItem[]> {
        return null;    
    }

    create(data: SimpleTodoItem): SimpleTodoItem | Promise<SimpleTodoItem> {
        return null;    
    }

    retrieve(pk: number): SimpleTodoItem | Promise<SimpleTodoItem> {
        return null;    
    }

    replace(pk: number, data: SimpleTodoItem): SimpleTodoItem | Promise<SimpleTodoItem> {
        return null;    
    }

    modify(pk: number, data: SimpleTodoItem): SimpleTodoItem | Promise<SimpleTodoItem> {
        return null;    
    }

    destroy(pk: number): void | Promise<void> {
        return null;    
    }
}
