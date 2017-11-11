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
    return this.allRecipes;
  }
}
