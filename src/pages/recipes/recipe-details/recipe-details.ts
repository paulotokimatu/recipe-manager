import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, App, Tabs, ModalController, ToastController, AlertController } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ShoppingList } from '../../shopping-list/models/shopping-list.model';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { ShoppingListChoosingModal } from './shopping-list-choosing/shopping-list-choosing';
import { RecipesService } from '../recipes.service';
import { RecipeAddPage } from '../recipe-add.html/recipe-add';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html'
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;
  recipeIndex: number;
  allShoppingList: ShoppingList[];

  constructor(public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public shoppingListService: ShoppingListService,
              public recipesService: RecipesService,
              public toastCtrl: ToastController,
              private app: App) {}

  ngOnInit() {
    this.recipeIndex = this.navParams.get('recipeIndex');
    this.recipe = this.recipesService.getRecipeByIndex(this.recipeIndex);
    // TODO maybe remove this property
    this.allShoppingList = this.shoppingListService.getLists();
  }

  onRemoveRecipe() {
    let alertConfirm = this.alertCtrl.create({
      title: 'Remove recipe?',
      message: 'Do you really want to remove this recipe?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.removeRecipe(this.recipeIndex);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alertConfirm.present();
  }

  onEditRecipe() {
    let modal = this.modalCtrl.create(RecipeAddPage, {
      mode: 'edit',
      recipe: this.recipe
    });
    modal.present();
    modal.onDidDismiss(() => {
      // Reload data
      this.recipe = this.recipesService.getRecipeByIndex(this.recipeIndex);
    });
  }

  onOpenShoppingListChoosing() {
    let modal = this.modalCtrl.create(ShoppingListChoosingModal, {ingredients: this.recipe.ingredients});
    modal.present();
    modal.onDidDismiss((data) => {
      if (typeof data.indexShoppingList === 'number') {
        this.addIngredientsToShoppingList(data.ingredientsToAdd, data.indexShoppingList);
      }
    });
  }

  addIngredientsToShoppingList(ingredientsToAdd: Ingredient[], indexShoppingList: number) {
    this.shoppingListService.addIngredientsToList(ingredientsToAdd, indexShoppingList);

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
