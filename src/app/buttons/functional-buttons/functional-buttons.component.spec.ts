import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalButtonsComponent } from './functional-buttons.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FunctionalButtonsComponent', () => {
  let component: FunctionalButtonsComponent;
  let fixture: ComponentFixture<FunctionalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalButtonsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
