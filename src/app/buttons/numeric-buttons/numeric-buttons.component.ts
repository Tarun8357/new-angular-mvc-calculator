import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';

@Component({
  selector: 'app-numeric-buttons',
  templateUrl: './numeric-buttons.component.html',
  styleUrls: ['./numeric-buttons.component.css']
})
export class NumericButtonsComponent extends ButtonsComponent {
  onClickHandler(value:any){
    this.onClick.emit(value);
  }
}
