import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html'
})
export class AddRecipePage implements OnInit {
  recipeForm: FormGroup;
  difficultyOptions = [1, 2, 3, 4, 5];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public viewCtrl: ViewController,
              private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    let title = null;
    let description = null;
    let difficulty = 0;
    let steps = null
    let ingredients = null;

    this.recipeForm = new FormGroup({
      'title': new FormControl(title),
      'description': new FormControl(description),
      'difficulty': new FormControl(difficulty),
      'steps': new FormControl(steps),
      'ingredients': new FormControl(ingredients)
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.recipesService.addRecipe(this.recipeForm.value);
    let toast = this.toastCtrl.create({
      message: 'Recipe was created successfully',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.viewCtrl.dismiss(true);
  }
}
