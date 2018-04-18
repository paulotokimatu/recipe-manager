import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from '../models/list.model';

@Component({
  selector: 'page-shopping-list-detail',
  templateUrl: 'shopping-list-detail.html'
})
export class ShoppingListDetailPage implements OnInit {
  list: List[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.list = this.navParams.get('list');
  }

  onPrint() {
    console.log(this.list);
  }
}
