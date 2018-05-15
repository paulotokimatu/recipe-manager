import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RecipeDetailsPage } from './recipe-details/recipe-details';
import { RecipesService } from './recipes.service';
import { RecipeAddPage } from './recipe-add.html/recipe-add';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/shared/shared/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipesSub: Subscription;
  recipes: Recipe[] = [];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public recipesService: RecipesService,
              public modalCtrl: ModalController,) {
  }

  ionViewDidEnter() {
    this.recipesSub = this.recipesService.allRecipesChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.recipesService.loadData();
  }

  onLoadAllRecipes() {
    this.recipes = this.recipesService.getRecipes();
  }

  onLoadRecipe(recipe, recipeIndex) {
    this.navCtrl.push(RecipeDetailsPage, {recipe: recipe, recipeIndex: recipeIndex});
  }

  onSearchRecipe(event) {
    this.onLoadAllRecipes();

    if (!event.target.value) {
      return;
    }

    const query: string = event.target.value.toLowerCase();
    this.filterRecipesByName(query);
  }

  private filterRecipesByName(query) {
    const found: Recipe[] = [];

    this.recipes.forEach((recipe) => {
      if (recipe.name.toLowerCase().startsWith(query)) {
        found.push(recipe);
      }
    });

    this.recipes = found;
  }

  onRemoveRecipe(event, recipeName: string, i: number) {
    event.stopPropagation();

    let alertConfirm = this.alertCtrl.create({
      title: 'Remove recipe?',
      message: 'Do you really want to remove ' + recipeName + '?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.removeRecipe(i);
            this.onLoadAllRecipes();
          }
        }
      ]
    });
    alertConfirm.present();
  }

  onAddRecipe() {
    let modal = this.modalCtrl.create(RecipeAddPage, {mode: 'add'});
    modal.present();
    // modal.onDidDismiss((data) => {
    //   if (!data) return;
    //   this.onLoadAllRecipes();
    // });
  }
}
