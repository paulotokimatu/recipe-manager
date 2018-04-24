import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingListPage } from './shopping-list';
import { ShoppingListDetailsPage } from './shopping-list-details/shopping-list-details';
import { ShoppingListAddPage } from './shopping-list-add/shopping-list-add';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar';
import { RecipesService } from '../recipes/recipes.service';
import { ShoppingListService } from './shopping-list.service';

@NgModule({
  declarations: [
    ShoppingListPage,
    ShoppingListDetailsPage,
    ShoppingListAddPage,
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListPage),
  ],
  entryComponents: [
    ShoppingListPage,
    ShoppingListDetailsPage,
    ShoppingListAddPage,
  ]
})
export class ShoppingListModule {}
