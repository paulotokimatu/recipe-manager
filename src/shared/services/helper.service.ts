import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class HelperService {

  constructor(public toastCtrl: ToastController) {}

  createToast(message, cssClass = '') {
    const toast = this.toastCtrl.create({
      cssClass: cssClass,
      message: message,
      duration: 1700,
      showCloseButton: true,
      position: 'top'
    });
    toast.present();
  }
}