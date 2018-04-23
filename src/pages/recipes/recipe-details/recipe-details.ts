import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, App, Tabs, ModalController, ToastController } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ShoppingList } from '../../shopping-list/models/shopping-list.model';
import { Ingredient } from '../../../components/shared/ingredient.model';
import { ShoppingListChoosingModal } from './shopping-list-choosing/shopping-list-choosing';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html'
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;
  recipeIndex: number;
  allShoppingList: ShoppingList[];

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public shoppingListService: ShoppingListService,
              public recipesService: RecipesService,
              public toastCtrl: ToastController,
              private app: App) {}

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.recipeIndex = this.navParams.get('recipeIndex');
    // TODO maybe remove this property
    this.allShoppingList = this.shoppingListService.getLists();
  }

  onRemoveRecipe() {
    this.recipesService.removeRecipe(this.recipeIndex);
    this.navCtrl.pop();
  }

  onOpenShoppingListChoosing() {
    let modal = this.modalCtrl.create(ShoppingListChoosingModal);
    modal.present();
    modal.onDidDismiss((indexShoppingList) => {
      if (typeof indexShoppingList === 'number') {
        this.addIngredientsToShoppingList(indexShoppingList);
      }
    });
  }

  addIngredientsToShoppingList(indexShoppingList: number) {
    this.shoppingListService.addIngredientsToList(this.recipe.ingredients, indexShoppingList);

    this.openToast(indexShoppingList);

    const tabsNav = this.app.getNavByIdOrName('tabsNav') as Tabs;
    tabsNav.select(1);
    this.navCtrl.pop();
  }

  openToast(indexShoppingList) {
    const toast = this.toastCtrl.create({
      message: 'Ingredients successfully added to shopping list ' + this.allShoppingList[indexShoppingList].name,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
