import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ShoppingList } from '../models/shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'page-shopping-list-add',
  templateUrl: 'shopping-list-add.html'
})
export class ShoppingListAddPage implements OnInit {
  shoppingListForm: FormGroup;
  isEditMode: boolean = false;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private fb: FormBuilder,
              private shoppingListService: ShoppingListService,
              private toastCtrl: ToastController) {
  }

  ngOnInit() {
    if (this.navParams.get('mode') == 'edit') {
      this.isEditMode = true;
    }
    this.initializeForm();
  }

  initializeForm() {
    const initialShoppingListData: ShoppingList = this.buildInitialShoppingList();

    this.shoppingListForm = this.fb.group({
      name: [initialShoppingListData.name, Validators.required],
      items: this.fb.array([])
    });

    this.addIngredientsToForm(initialShoppingListData.items);
  }

  buildInitialShoppingList() {
    let initialShoppingListData: ShoppingList;

    if (this.isEditMode) {
      initialShoppingListData = this.navParams.get('shoppingList');
    } else {
      initialShoppingListData = {
        name: '',
        date: null,
        items: [],
      }
    }
    return initialShoppingListData;
  }

  addIngredientsToForm(ingredients: Ingredient[]) {
    let formIngredients = <FormArray>this.shoppingListForm.controls.items;
    ingredients.forEach((ingredient) => {
      formIngredients.push(this.buildItem(
        ingredient.name,
        ingredient.quantity,
        ingredient.price
      ));
    })
  }

  buildItem(name: string, quantity: number, price: number) {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      quantity: new FormControl(quantity, Validators.required),
      price: new FormControl(price, Validators.required),
      checked: new FormControl(false)
    })
  }

  removeItem(indexItemToRemove) {
    let items = <FormArray>this.shoppingListForm.controls.items;
    items.removeAt(indexItemToRemove);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    if (this.isEditMode) {
      this.shoppingListService.editList(this.navParams.get('shoppingList').name, this.shoppingListForm.value);
    } else {
      this.shoppingListService.addList(this.shoppingListForm.value);
    }
    let toast = this.toastCtrl.create({
      message: 'Shopping list was saved successfully',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.viewCtrl.dismiss(true);
  }
}
