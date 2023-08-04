import { Component, OnInit } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';

@Component({
  selector: 'app-operational-buttons',
  templateUrl: './operational-buttons.component.html',
  styleUrls: ['./operational-buttons.component.css']
})
export class OperationalButtonsComponent extends ButtonsComponent implements OnInit{

  onClickHandler(value:any){
    this.onClick.emit(value);
  }

  override ngOnInit(): void {
    
  }

}
