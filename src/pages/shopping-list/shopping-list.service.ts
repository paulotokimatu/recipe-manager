import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ShoppingList } from "./models/shopping-list.model";
import { Ingredient } from "../../shared/models/ingredient.model";
import { Subject } from "rxjs/Subject";
import { HelperService } from "../../shared/services/helper.service";

@Injectable()
export class ShoppingListService {
  allListsChanged = new Subject<ShoppingList[]>();
  allLists: ShoppingList[] = [];

  constructor(private storage: Storage, private helperService: HelperService) {}

  loadData() {
    return this.storage.get('shopping-list')
      .then((data) => {
        this.allLists = data != null ? data : [];
        this.allListsChanged.next(this.allLists);
      })
      .catch(() => {
        this.helperService.createToast('Something went wrong, please try again', 'toast-error');
      });
  }

  getLists() {
    return [...this.allLists];
  }

  getListByIndex(index) {
    return this.allLists[index];
  }

  addList(newList) {
    let copyAllLists = this.getLists();
    copyAllLists.push(new ShoppingList(newList.name, new Date(), newList.items));
    this.saveData(copyAllLists);
  }

  editList(listName: string, newList: ShoppingList) {
    let copyAllLists = this.getLists();
    copyAllLists.forEach((list, index) => {
      if (list.name === listName) {
        copyAllLists[index] = newList;
      }
    });
    this.saveData(copyAllLists);
  }

  removeList(index: number) {
    let copyAllLists = this.getLists();
    copyAllLists.splice(index, 1);
    this.saveData(copyAllLists);
  }

  addIngredientsToList(ingredients: Ingredient[], index: number) {
    let copyAllLists = this.getLists();
    copyAllLists[index].items = [...copyAllLists[index].items, ...ingredients];
    this.saveData(copyAllLists);
  }

  private saveData(copyAllLists) {
    this.storage.set('shopping-list', copyAllLists)
      .then(() => {
        this.allLists = copyAllLists;
        this.allListsChanged.next(this.allLists);
      })
      .catch(() => {
        this.helperService.createToast('Something went wrong, please try again', 'toast-error');
      });
  }
}