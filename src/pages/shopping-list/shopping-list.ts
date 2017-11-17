import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController } from "ionic-angular";
import { AddListPage } from "./add-list/add-list";
import { ListDetailPage } from "./list-detail/list-detail";
import { List } from "./models/list.model";
import { ShoppingListService } from "./shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  allLists = [];

  constructor(public shoppingListService: ShoppingListService,
              public navCtrl: NavController,
              public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.onLoadAllLists();
  }

  onLoadAllLists() {
    this.allLists = this.shoppingListService.getLists();
  }

  onLoadList(list: List) {
    this.navCtrl.push(ListDetailPage, {list: list});
  }

  onAddList() {
    let modal = this.modalCtrl.create(AddListPage);
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