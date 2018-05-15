import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ContactPage } from '../pages/contact/contact';
import { RecipesService } from '../pages/recipes/recipes.service';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListService } from '../pages/shopping-list/shopping-list.service';
import { ShoppingListModule } from '../pages/shopping-list/shopping-list.module';
import { RecipesModule } from '../pages/recipes/recipes.module';
import { HelperService } from '../shared/services/helper.service';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    RecipesModule,
    ShoppingListModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipesService,
    ShoppingListService,
    HelperService
  ]
})
export class AppModule {}
