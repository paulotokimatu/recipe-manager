import { Injectable } from "@angular/core";
import {NgFor} from '@angular/common';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  allRecipes: Recipe[] = [];

  constructor() {
    this.allRecipes.push(new Recipe('Foo', 'blabla', 1, ['Meat', 'Potato']))
  }
  
  getRecipes() {
    console.log('ok');
    return this.allRecipes;
  }
}