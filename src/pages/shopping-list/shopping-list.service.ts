import { Injectable } from "@angular/core";
import { List } from "./models/list.model";
import { ShoppingItem } from "./models/shopping-item.model";

@Injectable()
export class ShoppingListService {
  allLists: List[] = [];

  constructor() {
    this.allLists.push(new List('LIST01', new Date(), [
      new ShoppingItem('Potato', 4, 0.5, false),
      new ShoppingItem('Meat', 2, 10.5, true)
    ]))
  }

  getLists() {
    return this.allLists;
  }

  addList(newList) {
    this.allLists.push(new List(newList.name,
      new Date(),
      newList.items));
  }
}