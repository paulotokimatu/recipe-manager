import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { RecipesPage } from '../recipes/recipes';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'RecipesPage';
  tab2Root = 'ShoppingListPage';
  tab3Root = ContactPage;

  constructor() {

  }
}
