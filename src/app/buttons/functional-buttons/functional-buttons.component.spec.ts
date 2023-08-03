import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalButtonsComponent } from './functional-buttons.component';

describe('FunctionalButtonsComponent', () => {
  let component: FunctionalButtonsComponent;
  let fixture: ComponentFixture<FunctionalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalButtonsComponent ]
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
