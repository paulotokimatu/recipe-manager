import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'page-recipe-add',
  templateUrl: 'recipe-add.html'
})
export class RecipeAddPage implements OnInit {
  recipeForm: FormGroup;
  difficultyOptions = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder,
              public navCtrl: NavController,
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
    let difficulty = 0;
    let ingredients = null;
    let notes = null;

    this.recipeForm = this.fb.group({
      title: [title, Validators.required],
      difficulty: [difficulty, Validators.required],
      ingredients: this.fb.array([this.buildIngredient('', null, null)]),
      notes: [notes]
    });
  }

  buildIngredient(name: string, quantity: number, price: number) {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      quantity: new FormControl(quantity, Validators.required),
      price: new FormControl(price, Validators.required)
    })
  }

  removeIngredient(indexItemToRemove) {
    let items = <FormArray>this.recipeForm.controls.ingredients;
    items.removeAt(indexItemToRemove);
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
