import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { RecipePage } from './recipe/recipe';
import { RecipesService } from './recipes.service';
import { AddRecipePage } from './recipe-add.html/recipe-add';

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
              public recipesService: RecipesService,
              public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.onLoadAllRecipes();
  }

  onLoadAllRecipes() {
    this.recipes = this.recipesService.getRecipes();
  }

  onLoadRecipe(recipe) {
    this.navCtrl.push(RecipePage, {recipe: recipe});
  }

  onAddRecipe() {
    let modal = this.modalCtrl.create(AddRecipePage);
    modal.present();
    modal.onDidDismiss((data) => {
      if (!data) return;
      this.onLoadAllRecipes();
    })
  }

  onRemoveRecipe(i: number) {
    this.recipesService.removeList(i);
    this.onLoadAllRecipes();
  }
}
