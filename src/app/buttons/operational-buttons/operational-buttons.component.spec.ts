import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalButtonsComponent } from './operational-buttons.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OperationalButtonsComponent', () => {
  let component: OperationalButtonsComponent;
  let fixture: ComponentFixture<OperationalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalButtonsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
