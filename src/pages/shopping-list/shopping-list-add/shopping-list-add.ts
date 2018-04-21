import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ShoppingList } from '../models/shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'page-shopping-list-add',
  templateUrl: 'shopping-list-add.html'
})
export class ShoppingListAddPage implements OnInit {
  shoppingListForm: FormGroup;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private fb: FormBuilder,
              private shoppingListService: ShoppingListService,
              private toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    let name = null;
    let items = null;

    this.shoppingListForm = this.fb.group({
      name: ['', Validators.required],
      items: this.fb.array([this.buildItem('', null, null)])
    });
  }

  buildItem(name: string, quantity: number, price: number) {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      quantity: new FormControl(quantity, Validators.required),
      price: new FormControl(price, Validators.required),
      check: new FormControl(false)
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
    this.shoppingListService.addList(this.shoppingListForm.value);
    let toast = this.toastCtrl.create({
      message: 'Shopping list was created successfully',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.viewCtrl.dismiss(true);
  }
}
