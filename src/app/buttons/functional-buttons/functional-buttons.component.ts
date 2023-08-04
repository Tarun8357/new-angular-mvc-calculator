import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';

@Component({
  selector: 'app-functional-buttons',
  templateUrl: './functional-buttons.component.html',
  styleUrls: ['./functional-buttons.component.css']
})
export class FunctionalButtonsComponent extends ButtonsComponent{
  
  onClickHandler(value: any){
    this.onClick.emit(value);
  }
  override ngOnInit(): void {
    
  }

}
