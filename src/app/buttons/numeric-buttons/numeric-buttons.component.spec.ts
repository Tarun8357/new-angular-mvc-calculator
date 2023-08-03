import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericButtonsComponent } from './numeric-buttons.component';

describe('NumericButtonsComponent', () => {
  let component: NumericButtonsComponent;
  let fixture: ComponentFixture<NumericButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericButtonsComponent ]
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
