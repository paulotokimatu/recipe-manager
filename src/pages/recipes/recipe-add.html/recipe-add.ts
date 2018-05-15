import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { HelperService } from '../../../shared/services/helper.service';

@Component({
  selector: 'page-recipe-add',
  templateUrl: 'recipe-add.html'
})
export class RecipeAddPage implements OnInit {
  recipeForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder,
              public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private recipesService: RecipesService,
              private helperService: HelperService) {
  }

  ngOnInit() {
    if (this.navParams.get('mode') == 'edit') {
      this.isEditMode = true;
    }
    this.initializeForm();
  }

  initializeForm() {
    const initialRecipeData: Recipe = this.buildInitialRecipe();
    
    this.recipeForm = this.fb.group({
      name: [initialRecipeData.name, Validators.required],
      difficulty: [initialRecipeData.difficulty, Validators.required],
      servings: [initialRecipeData.servings, Validators.required],
      ingredients: this.fb.array([]),
      notes: [initialRecipeData.notes]
    });

    this.addIngredientsToForm(initialRecipeData.ingredients);
  }

  private buildInitialRecipe() {
    let initialRecipe: Recipe;

    if (this.isEditMode) {
      initialRecipe = this.navParams.get('recipe');
    } else {
      initialRecipe = {
        name: null,
        difficulty: 1,
        servings: 1,
        ingredients: [],
        notes: null
      }
    }
    return initialRecipe;
  }

  addIngredientsToForm(ingredients: Ingredient[]) {
    let formIngredients = <FormArray>this.recipeForm.controls.ingredients;
    ingredients.forEach((ingredient) => {
      formIngredients.push(this.buildIngredient(
        ingredient.name,
        ingredient.quantity,
        ingredient.price
      ));
    })
  }

  buildIngredient(name: string = '', quantity: number = 0, price: number = 0) {
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
    if (this.isEditMode) {
      this.recipesService.editRecipe(this.navParams.get('recipe').name, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.helperService.createToast('Recipe was saved successfully');
    this.viewCtrl.dismiss(true);
  }
}
