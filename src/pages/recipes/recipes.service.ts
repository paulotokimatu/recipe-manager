import { Injectable } from "@angular/core";

@Injectable()
export class RecipesService {
  allRecipes: any[] = [
    'foo',
    'bar',
  ];

  getRecipes() {
    console.log('ok');
    return this.allRecipes;
  }
}