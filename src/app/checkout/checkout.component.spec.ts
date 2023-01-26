// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CheckoutComponent } from './checkout.component';

// describe('CheckoutComponent', () => {
//   let component: CheckoutComponent;
//   let fixture: ComponentFixture<CheckoutComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CheckoutComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CheckoutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });













import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';

import { CheckoutComponent } from './checkout.component';


//Describing the Payment Component Testcases
describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  //Declaring the Component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports:[FormsModule, ReactiveFormsModule, HttpClientTestingModule, BrowserAnimationsModule,
      StoreModule.forRoot({})]
    })
    .compileComponents();

    //Creating TestBed for Payment Component
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the component has card number or not
  it('should have the Card Number', ()=>{
    expect(fixture.debugElement.query(By.css('.card'))).toBeTruthy();
  });

  //It tests that the component has card holder name or not
  it('should have the Card Holder Name',()=>{
    expect(fixture.debugElement.query(By.css('.name'))).toBeTruthy();
  });

  //It tests that the component has card expiry date or not
  it('should have the Card Expiry Date',()=>{
    expect(fixture.debugElement.query(By.css('.date'))).toBeTruthy();
  });

  //It tests that the component has card cvv or not
  it('should have the Card cvv',()=>{
    expect(fixture.debugElement.query(By.css('.cvv'))).toBeTruthy();
  });


   //It tests that the component has submit button or not
   it('should have the submit button',()=>{
    expect(fixture.debugElement.query(By.css('#button'))).toBeTruthy();
  });
  
});