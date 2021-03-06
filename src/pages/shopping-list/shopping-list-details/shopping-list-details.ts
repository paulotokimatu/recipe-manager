import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ShoppingList } from '../models/shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingListAddPage } from '../shopping-list-add/shopping-list-add';

@Component({
  selector: 'page-shopping-list-details',
  templateUrl: 'shopping-list-details.html'
})
export class ShoppingListDetailsPage implements OnInit {
  shoppingList: ShoppingList;
  shoppingListIndex: number;
  numberItemsChecked: number;
  numberItemsTotal: number;
  totalPrice: number;

  constructor(public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingListIndex = this.navParams.get('shoppingListIndex');
    this.shoppingList = this.shoppingListService.getListByIndex(this.shoppingListIndex);
    this.numberItemsTotal = this.shoppingList.items.length;
    this.countItemsChecked();
    this.sumTotalPrice();
  }

  countItemsChecked() {
    this.numberItemsChecked = 0;
    this.shoppingList.items.forEach(item => {
      if (item.checked) {
        this.numberItemsChecked++;
      }
    });
  }

  sumTotalPrice() {
    this.totalPrice = 0;
    this.shoppingList.items.forEach(item => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  onEditShoppingList() {
    let modal = this.modalCtrl.create(ShoppingListAddPage, {
      mode: 'edit',
      shoppingList: this.shoppingList
    });
    modal.present();
    modal.onDidDismiss(() => {
      // Reload data
      this.shoppingList = this.shoppingListService.getListByIndex(this.shoppingListIndex);
      this.numberItemsTotal = this.shoppingList.items.length;
      this.countItemsChecked();
      this.sumTotalPrice();
    });
  }

  onRemoveShoppingList() {
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
            this.shoppingListService.removeList(this.shoppingListIndex);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alertConfirm.present();
  }
}
