import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from '../models/list.model';

@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetailPage implements OnInit {
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
