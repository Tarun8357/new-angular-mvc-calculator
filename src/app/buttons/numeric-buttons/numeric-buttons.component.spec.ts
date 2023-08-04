import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericButtonsComponent } from './numeric-buttons.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NumericButtonsComponent', () => {
  let component: NumericButtonsComponent;
  let fixture: ComponentFixture<NumericButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericButtonsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
