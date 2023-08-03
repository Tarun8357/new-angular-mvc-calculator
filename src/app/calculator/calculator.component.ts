import { Component, Input } from '@angular/core';
import { CalculatorModel } from './calculator-model';
import { FunctionalButtonsComponent } from '../buttons/functional-buttons/functional-buttons.component';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers:[CalculatorModel]
})
export class CalculatorComponent{
  title = 'calculator';
  label:any;
  displayValue ="";
  value:any='';
  containerStack:any = [];
  model = new CalculatorModel;
  functionButtns = this.model.functionalButtons;
  numericButtons = this.model.numericButtons;
  operationalButtons = this.model.operationalButtons;
   

  constructor(private connection : ConfigService ){
  }

  setDisplay(displayValue:any){
    this.displayValue=displayValue;
  }
  getDisplay(){
   return this.displayValue;
  }
  
  

  onOperationalClickHandler(key:any){
    this.pushNumber();
    if(key.value =='EQUAL'){
       this.calculate();
    }
    else{
      this.value = this.getDisplay();
      this.containerStack.push({type:"OPERATOR",value:key.value});
      this.value = "";
      this.setDisplay(this.value);
    }
  }

   
  onFunctionClickHandler(key:any){
    if(key=='AC'){
      this.setDisplay("");
  }else if (key=='DEL'){
      this.setDisplay(this.value.substring(0,this.value.length-1));
  }else if (key=='UNDO'){
    console.log ("This is undo button ");
  }
  }
   

  onNumericClickHandler(key:any){
    this.value = this.getDisplay();
    this.value+=key.value;
    this.setDisplay(this.value);
  }

  pushNumber(){
    this.value = this.getDisplay();
    this.containerStack.push({type:"NUMBER",value:this.value});
}


calculate(){
 this.connection.getValuesBackend(this.containerStack).subscribe((response : any) => {
   this.setDisplay(response);
    
    
  });
 console.log("Calculate method called");      
  }
 

}
