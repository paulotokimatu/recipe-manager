import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingList } from '../models/list.model';

@Component({
  selector: 'page-shopping-list-detail',
  templateUrl: 'shopping-list-detail.html'
})
export class ShoppingListDetailPage implements OnInit {
  shoppingList: ShoppingList;
  numberItemsChecked: number;
  numberItemsTotal: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.shoppingList = this.navParams.get('list');
    this.numberItemsTotal = this.shoppingList.items.length;
    this.countItemsChecked();
  }

  countItemsChecked() {
    this.numberItemsChecked = 0;
    this.shoppingList.items.forEach(item => {
      if (item.check) {
        this.numberItemsChecked++;
      }
    });
  }
}
