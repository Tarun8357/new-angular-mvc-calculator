import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking null values', () => {
    component.value = '';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').innerText).toEqual('');
  });
  
  
  it('should check the input', () => {
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.nativeElement.value = "1234";

    component.value.subscribe((value: { input: any; name: any; }) => {
      expect(value.input).toBe("1234");
      
    });
    input.triggerEventHandler('click', null);
  });   

});
