import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipePage } from './recipe/recipe';
import { RecipesService } from './recipes.service';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public recipesService: RecipesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.recipes = this.recipesService.getRecipes();
  }

  onLoadRecipe(recipe) {
    this.navCtrl.push(RecipePage, {recipe: recipe});
  }
}
