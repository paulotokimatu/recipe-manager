import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShoppingListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
