import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html'
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    console.log(this.recipe.ingredients);
  }
}
