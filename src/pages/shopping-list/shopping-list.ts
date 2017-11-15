import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { ShoppingListService } from "./shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  allLists = [];

  constructor(public shoppingListService: ShoppingListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.onLoadAllLists();
  }

  onLoadAllLists() {
    this.allLists = this.shoppingListService.getLists();
  }
}