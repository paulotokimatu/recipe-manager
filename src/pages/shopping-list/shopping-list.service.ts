import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ShoppingList } from "./models/shopping-list.model";
import { Ingredient } from "../../shared/models/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  allListsChanged = new Subject<ShoppingList[]>();
  allLists: ShoppingList[] = [];

  constructor(private storage: Storage) {}

  loadData() {
    return this.storage.get('shopping-list')
      .then((data) => {
        this.allLists = data != null ? data : [];
        this.allListsChanged.next(this.allLists);
      })
      .catch(() => {

      });
  }

  getLists() {
    return [...this.allLists];
  }

  getListByIndex(index) {
    return this.allLists[index];
  }

  addList(newList) {
    this.allLists.push(new ShoppingList(newList.name, new Date(), newList.items));
    this.saveData();
  }

  editList(listTitle: string, newList: ShoppingList) {
    this.allLists.forEach((list, index) => {
      if (list.name === listTitle) {
        this.allLists[index] = newList;
      }
    });
    this.saveData();
  }

  removeList(index: number) {
    this.allLists.splice(index, 1);
    this.saveData();
  }

  addIngredientsToList(ingredients: Ingredient[], index: number) {
    this.allLists[index].items = [...this.allLists[index].items, ...ingredients];
    this.saveData();
  }

  private saveData() {
    this.storage.set('shopping-list', this.allLists)
      .then(() => {
      })
      .catch(() => {
        console.log('test');
      });
  }
}