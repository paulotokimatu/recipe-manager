import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, AlertController } from "ionic-angular";
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

  constructor(public alertCtrl: AlertController,
              public shoppingListService: ShoppingListService,
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
    let alertConfirm = this.alertCtrl.create({
      title: 'Remove shopping list?',
      message: 'Do you really want to remove this shopping list?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.shoppingListService.removeList(i);
            this.onLoadAllLists();
          }
        }
      ]
    });
  alertConfirm.present();
  }
}
