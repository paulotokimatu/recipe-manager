import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { HelperService } from '../../shared/services/helper.service';

@Injectable()
export class RecipesService {
  allRecipesChanged = new Subject<Recipe[]>();
  allRecipes: Recipe[] = [];

  constructor(private storage: Storage, private helperService: HelperService) {}

  loadData() {
    return this.storage.get('recipes')
      .then((data) => {
        this.allRecipes = data != null ? data : [];
        this.allRecipesChanged.next(this.allRecipes);
      })
      .catch(() => {
        this.helperService.createToast('Something went wrong, please try again', 'toast-error');
      });
  }

  getRecipes() {
    return [...this.allRecipes];
  }

  getRecipeByIndex(index: number) {
    return this.allRecipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    let copyAllRecipes = this.getRecipes();
    copyAllRecipes.push(new Recipe(newRecipe.name,
      newRecipe.difficulty,
      newRecipe.servings,
      newRecipe.ingredients,
      newRecipe.notes,
    ));
    this.saveData(copyAllRecipes);
  }

  editRecipe(recipeName: string, newRecipe: Recipe) {
    let copyAllRecipes = this.getRecipes();
    copyAllRecipes.forEach((recipe, index) => {
      if (recipe.name === recipeName) {
        copyAllRecipes[index] = newRecipe;
      }
    });
    this.saveData(copyAllRecipes);
  }

  removeRecipe(index: number) {
    let copyAllRecipes = this.getRecipes();
    copyAllRecipes.splice(index, 1);
    this.saveData(copyAllRecipes);
  }

  private saveData(copyAllRecipes) {
    this.storage.set('recipes', copyAllRecipes)
      .then(() => {
        this.allRecipes = copyAllRecipes;
        this.allRecipesChanged.next(this.allRecipes);
      })
      .catch(() => {
        this.helperService.createToast('Something went wrong, please try again', 'toast-error');
      });
  }
}
