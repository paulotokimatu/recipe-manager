import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { List } from '../models/list.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html'
})
export class AddListPage implements OnInit {
  listForm: FormGroup;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private fb: FormBuilder,
              private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    let name = null;
    let items = null;

    this.listForm = this.fb.group({
      name: [''],
      items: this.fb.array([this.buildItem('', 1, 0)])
    });

    /* this.listForm = new FormGroup({
      'name': new FormControl(name),
      'items': new FormControl(items)
    }); */
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.listForm);
    //this.shoppingListService.addList(this.listForm.value);
    //this.viewCtrl.dismiss(true);
  }

  buildItem(name: string, quantity: number, price: number) {
    return new FormGroup({
      name: new FormControl(name),
      quantity: new FormControl(quantity),
      price: new FormControl(price),
      check: new FormControl(false)
    })
  }
}
