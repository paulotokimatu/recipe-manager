import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { ShoppingList } from '../../../shopping-list/models/shopping-list.model';
import { Ingredient } from '../../../../shared/models/ingredient.model';

@Component({
  selector: 'page-shopping-list-choosing',
  templateUrl: 'shopping-list-choosing.html'
})
export class ShoppingListChoosingModal implements OnInit {
  shoppingLists: ShoppingList[];
  allIngredients: Ingredient[];
  willIngredientBeAdded: boolean[];
  ingredientsToAdd: Ingredient[] = [];

  constructor(public navParams: NavParams,
              public shoppingListService: ShoppingListService,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.shoppingLists = this.shoppingListService.getLists();
    this.allIngredients = this.navParams.get('ingredients');
    this.initializeIngredientsToAddArray();
  }

  initializeIngredientsToAddArray() {
    this.willIngredientBeAdded = [];

    this.allIngredients.forEach(() => {
      this.willIngredientBeAdded.push(true);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  handleIngredientsToBeAdded(event, ingredientIndex) {
    this.willIngredientBeAdded[ingredientIndex] = event.value;
  }

  onChooseShoppingList(indexShoppingList) {
    this.prepareArrayOfIngredientsOutput();
    this.viewCtrl.dismiss({indexShoppingList: indexShoppingList, ingredientsToAdd: this.ingredientsToAdd});
  }

  prepareArrayOfIngredientsOutput() {
    this.willIngredientBeAdded.forEach((value, index) => {
      if (value) {
        this.ingredientsToAdd.push(this.allIngredients[index]);
      }
    });
  }
}
