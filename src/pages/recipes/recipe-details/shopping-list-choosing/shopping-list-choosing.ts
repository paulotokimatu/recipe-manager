import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { ShoppingList } from '../../../shopping-list/models/shopping-list.model';

@Component({
  selector: 'page-shopping-list-choosing',
  templateUrl: 'shopping-list-choosing.html'
})
export class ShoppingListChoosingModal implements OnInit {
  shoppingLists: ShoppingList[];

  constructor(public shoppingListService: ShoppingListService,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.shoppingLists = this.shoppingListService.getLists();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onChooseShoppingList(indexShoppingList) {
    this.viewCtrl.dismiss(indexShoppingList);
  }
}
