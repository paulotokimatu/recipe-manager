import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController } from "ionic-angular";
import { ShoppingListAddPage } from "./shopping-list-add/shopping-list-add";
import { ShoppingListDetailsPage } from "./shopping-list-details/shopping-list-details";
import { ShoppingList } from "./models/shopping-list.model";
import { ShoppingListService } from "./shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  allLists: ShoppingList[] = [];

  constructor(public shoppingListService: ShoppingListService,
              public navCtrl: NavController,
              public modalCtrl: ModalController,) {
  }

  ionViewDidEnter() {
    this.onLoadAllLists();
  }

  onLoadAllLists() {
    this.allLists = this.shoppingListService.getLists();
  }

  onLoadList(list: ShoppingList, shoppingListIndex: number) {
    this.navCtrl.push(ShoppingListDetailsPage, {list: list, shoppingListIndex: shoppingListIndex});
  }

  onAddList() {
    let modal = this.modalCtrl.create(ShoppingListAddPage);
    modal.present();
    modal.onDidDismiss((data) => {
      if (!data) return;
      this.onLoadAllLists();
    })
  }

  onRemoveList(i: number) {
    this.shoppingListService.removeList(i);
    this.onLoadAllLists();
  }
}