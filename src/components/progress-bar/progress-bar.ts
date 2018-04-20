import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
  @Input('numberItemsChecked') numberItemsChecked;
  @Input('numberItemsTotal') numberItemsTotal;
 
  constructor() { } 
}
