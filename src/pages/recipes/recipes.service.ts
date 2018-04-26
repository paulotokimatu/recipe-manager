import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';

@Injectable()
export class RecipesService {
  allRecipes: Recipe[] = [];

  constructor() {
    this.allRecipes.push(new Recipe('Banana bread', 1, [
      new Ingredient('Potato', 4, 0.5, false),
      new Ingredient('Meat', 2, 10.5, false)
    ], 'lorem ipsum'));

    this.allRecipes.push(new Recipe('German pizza', 1, [
      new Ingredient('Potato', 4, 0.5, false),
      new Ingredient('Meat', 2, 10.5, false)
    ], 'lorem ipsum'));
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
  }

  editRecipe(recipeTitle: string, newRecipe: Recipe) {
    this.allRecipes.forEach((recipe, index) => {
      if (recipe.title === recipeTitle) {
        this.allRecipes[index] = newRecipe;
      }
    });
  }

  removeRecipe(index: number) {
    this.allRecipes.splice(index, 1);
  }
}
