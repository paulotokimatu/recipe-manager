import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingList } from '../models/shopping-list.model';

@Component({
  selector: 'page-shopping-list-details',
  templateUrl: 'shopping-list-details.html'
})
export class ShoppingListDetailsPage implements OnInit {
  shoppingList: ShoppingList;
  numberItemsChecked: number;
  numberItemsTotal: number;
  totalPrice: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
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
      if (item.check) {
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
}
