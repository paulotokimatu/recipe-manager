import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  onNavigate() {
    this.navCtrl.push(RecipesPage);
  }
}
