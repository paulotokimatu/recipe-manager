import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RecipePage } from '../pages/recipes/recipe/recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipesService } from '../pages/recipes/recipes.service';
import { TabsPage } from '../pages/tabs/tabs';
import { AddRecipePage } from '../pages/recipes/add-recipe.html/add-recipe';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ShoppingListService } from '../pages/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    RecipesPage,
    RecipePage,
    AddRecipePage,
    ShoppingListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    RecipesPage,
    RecipePage,
    AddRecipePage,
    ShoppingListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipesService,
    ShoppingListService,
  ]
})
export class AppModule {}
