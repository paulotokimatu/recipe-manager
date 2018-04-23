import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingList } from '../models/shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingList = this.navParams.get('list');
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

  onRemoveShoppingList() {
    this.shoppingListService.removeList(this.shoppingListIndex);
    this.navCtrl.pop();
  }
}
