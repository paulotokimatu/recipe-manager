import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipesService {
  allRecipes: Recipe[] = [];

  constructor() {
    this.allRecipes.push(new Recipe('Banana bread', 1, [
      new Ingredient('Potato', 4, 0.5),
      new Ingredient('Meat', 2, 10.5)
    ], 'lorem ipsum'));

    this.allRecipes.push(new Recipe('German pizza', 1, [
      new Ingredient('Potato', 4, 0.5),
      new Ingredient('Meat', 2, 10.5)
    ], 'lorem ipsum'));
  }

  getRecipes() {
    return [...this.allRecipes];
  }

  addRecipe(newRecipe: Recipe) {
    this.allRecipes.push(new Recipe(newRecipe.title,
      newRecipe.difficulty,
      newRecipe.ingredients,
      newRecipe.notes,
    ));
  }

  removeList(index: number) {
    this.allRecipes.splice(index, 1);
  }
}
