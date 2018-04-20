import { Injectable } from "@angular/core";
import { ShoppingList } from "./models/list.model";
import { ShoppingItem } from "./models/shopping-item.model";

@Injectable()
export class ShoppingListService {
  allLists: ShoppingList[] = [];

  constructor() {
    this.allLists.push(new ShoppingList('Weekly list', new Date(), [
      new ShoppingItem('Potato', 4, 0.5, false),
      new ShoppingItem('Meat', 2, 10.5, true)
    ]))
  }

  getLists() {
    return [...this.allLists];
  }

  addList(newList) {
    this.allLists.push(new ShoppingList(newList.name,
      new Date(),
      newList.items));
  }

  removeList(index: number) {
    this.allLists.splice(index, 1);
  }
}