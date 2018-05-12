import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipesService {
  allRecipesChanged = new Subject<Recipe[]>();
  allRecipes: Recipe[] = [];

  constructor(private storage: Storage) {
    // this.allRecipes.push(new Recipe('Banana bread', 1, [
    //   new Ingredient('Potato', 4, 0.5, false),
    //   new Ingredient('Meat', 2, 10.5, false)
    // ], 'lorem ipsum'));

    // this.allRecipes.push(new Recipe('German pizza', 1, [
    //   new Ingredient('Potato', 4, 0.5, false),
    //   new Ingredient('Meat', 2, 10.5, false)
    // ], 'lorem ipsum'));
  }

  loadData() {
    return this.storage.get('recipes')
      .then((data) => {
        this.allRecipes = data != null ? data : [];
        this.allRecipesChanged.next(this.allRecipes);
      })
      .catch(() => {

      });
  }

  getRecipes() {
    return [...this.allRecipes];
  }

  getRecipeByIndex(index: number) {
    return this.allRecipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.allRecipes.push(new Recipe(newRecipe.title,
      newRecipe.difficulty,
      newRecipe.ingredients,
      newRecipe.notes,
    ));
    this.saveData();
  }

  editRecipe(recipeTitle: string, newRecipe: Recipe) {
    this.allRecipes.forEach((recipe, index) => {
      if (recipe.title === recipeTitle) {
        this.allRecipes[index] = newRecipe;
      }
    });
    this.saveData();
  }

  removeRecipe(index: number) {
    this.allRecipes.splice(index, 1);
    this.saveData();
  }

  private saveData() {
    this.storage.set('recipes', this.allRecipes)
      .then(() => {
      })
      .catch(() => {
        console.log('test');
      });
  }
}
