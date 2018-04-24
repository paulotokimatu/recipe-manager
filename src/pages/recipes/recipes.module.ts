import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipesPage } from './recipes';
import { RecipeDetailsPage } from './recipe-details/recipe-details';
import { RecipeAddPage } from './recipe-add.html/recipe-add';
import { ShoppingListChoosingModal } from './recipe-details/shopping-list-choosing/shopping-list-choosing';

@NgModule({
  declarations: [
    RecipesPage,
    RecipeDetailsPage,
    RecipeAddPage,
    ShoppingListChoosingModal
  ],
  imports: [
    IonicPageModule.forChild(RecipesPage),
  ],
  entryComponents: [
    RecipesPage,
    RecipeDetailsPage,
    RecipeAddPage,
    ShoppingListChoosingModal,
  ]
})
export class RecipesModule {}
