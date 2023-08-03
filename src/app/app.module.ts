import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FunctionalButtonsComponent } from './buttons/functional-buttons/functional-buttons.component';
import { OperationalButtonsComponent } from './buttons/operational-buttons/operational-buttons.component';
import { NumericButtonsComponent } from './buttons/numeric-buttons/numeric-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonsComponent,
    CalculatorComponent,
    FunctionalButtonsComponent,
    OperationalButtonsComponent,
    NumericButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
