import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, App, Tabs } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ShoppingList } from '../../shopping-list/models/shopping-list.model';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html'
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;
  allShoppingList: ShoppingList[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public shoppingListService: ShoppingListService,
              private app: App) {}

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.allShoppingList = this.shoppingListService.getLists();
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsToList(this.recipe.ingredients, 0);
    const tabsNav = this.app.getNavByIdOrName('tabsNav') as Tabs;
    tabsNav.select(1);
    this.navCtrl.pop();
  }
}
