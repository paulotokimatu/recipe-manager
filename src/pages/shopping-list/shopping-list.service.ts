import { Injectable } from "@angular/core";
import { ShoppingList } from "./models/shopping-list.model";
import { Ingredient } from "../../shared/models/ingredient.model";

@Injectable()
export class ShoppingListService {
  allLists: ShoppingList[] = [];

  constructor() {
    this.allLists.push(new ShoppingList('Weekly list', new Date(), [
      new Ingredient('Potato', 4, 0.5, false),
      new Ingredient('Meat', 2, 10.5, true)
    ]))
  }

  getLists() {
    return [...this.allLists];
  }

  getListByIndex(index) {
    return this.allLists[index];
  }

  addList(newList) {
    this.allLists.push(new ShoppingList(newList.name,
      new Date(),
      newList.items));
  }

  editList(listTitle: string, newList: ShoppingList) {
    this.allLists.forEach((list, index) => {
      if (list.name === listTitle) {
        this.allLists[index] = newList;
      }
    });
  }

  removeList(index: number) {
    this.allLists.splice(index, 1);
  }

  addIngredientsToList(ingredients: Ingredient[], index: number) {
    this.allLists[index].items = [...this.allLists[index].items, ...ingredients];
  }
}