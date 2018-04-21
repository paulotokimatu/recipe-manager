import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ContactPage } from '../pages/contact/contact';
import { RecipePage } from '../pages/recipes/recipe/recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipesService } from '../pages/recipes/recipes.service';
import { TabsPage } from '../pages/tabs/tabs';
import { AddRecipePage } from '../pages/recipes/recipe-add.html/recipe-add';
import { ShoppingListDetailsPage } from '../pages/shopping-list/shopping-list-details/shopping-list-details';
import { ShoppingListAddPage } from '../pages/shopping-list/shopping-list-add/shopping-list-add';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ShoppingListService } from '../pages/shopping-list/shopping-list.service';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    RecipesPage,
    RecipePage,
    AddRecipePage,
    ShoppingListPage,
    ShoppingListDetailsPage,
    ShoppingListAddPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    RecipesPage,
    RecipePage,
    AddRecipePage,
    ShoppingListPage,
    ShoppingListDetailsPage,
    ShoppingListAddPage,
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
