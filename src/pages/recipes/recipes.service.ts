import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  allRecipes: Recipe[] = [];

  constructor() {
    this.allRecipes.push(new Recipe('Foo', 'blabla', 1, 'lorem ipsum', ['Meat', 'Potato']));
    this.allRecipes.push(new Recipe('Foo', 'blabla', 1, 'lorem ipsum', ['Meat', 'Potato']));
  }

  getRecipes() {
    return [...this.allRecipes];
  }

  addRecipe(newRecipe: Recipe) {
    this.allRecipes.push(new Recipe(newRecipe.title,
      newRecipe.description,
      newRecipe.difficulty,
      newRecipe.steps,
      newRecipe.ingredients));
  }

  removeList(index: number) {
    this.allRecipes.splice(index, 1);
  }
}
