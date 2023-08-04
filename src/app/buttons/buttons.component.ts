import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() id : any;
  @Input() label: any;
  // @Input() functionBtnId:any;
  
  @Output() onClick: EventEmitter<void> =  new EventEmitter<void>();


 
  
    onButtonClick(value:any){
    this.onClick.emit(value);
  }

  ngOnInit(): void {
    
  }
}
