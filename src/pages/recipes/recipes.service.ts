import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  allRecipes: Recipe[] = [];

  constructor() {
    this.allRecipes.push(new Recipe('Foo', 1, ['Meat', 'Potato'], 'lorem ipsum'));
    this.allRecipes.push(new Recipe('Bar', 5, ['Meat', 'Potato'], 'lorem ipsum'));
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
