import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { ListDetailPage } from "./list-detail/list-detail";
import { ShoppingListService } from "./shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  allLists = [];

  constructor(public shoppingListService: ShoppingListService,
              public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.onLoadAllLists();
  }

  onLoadAllLists() {
    this.allLists = this.shoppingListService.getLists();
  }

  onLoadList(list) {
    this.navCtrl.push(ListDetailPage, {list: list});
  }
}