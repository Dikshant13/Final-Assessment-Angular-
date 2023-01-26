// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CartComponent } from './cart.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';




// describe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;
//   let element:HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports:[FormsModule],
//       declarations: [ CartComponent ],
//       schemas:[NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     element=fixture.nativeElement;
//     fixture.detectChanges();
//   });

//   it('should create cart', () => {
//     expect(component).toBeTruthy();
//   });
// });












import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './cart.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Describing the CartComponent Component Test Cases
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let element:HTMLElement;
  //Declaring the CartComponent Component and Importing the Necessary Modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({})],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    //It will create the testbed for the component
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element=fixture.nativeElement;
  });

  //It tests that the component will be created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the div containing the cart items will be rendered or not
  it('should render the Cart Items',()=>{
    expect(fixture.debugElement).toBeTruthy();
  });

  //It tests that the total price div is rendered or not
  it('should show the total price',()=>{
    expect(fixture.debugElement.query(By.css('#total'))).toBeTruthy();
  });

  //It tests that the checkout button comes or not
  it('should have the checkout button',()=>{
    expect(fixture.debugElement.query(By.css('#checkout'))).toBeTruthy();

    const checkout:HTMLElement= fixture.debugElement.query(By.css('#checkout')).nativeElement;
    expect(checkout.textContent).toEqual('CHECKOUT');
  });

  //It tests that the continue shopping button comes or not
  it('should have the continue shopping button',()=>{
    expect(fixture.debugElement.query(By.css('#continueshopping'))).toBeTruthy();;

    const continueshopping:HTMLElement= fixture.debugElement.query(By.css('#continueshopping')).nativeElement;
    expect(continueshopping.textContent).toEqual('CONTINUE SHOPPING');
  });

  //It tests that the checkout button will be disabled when the cart is empty
  it('should check the checkout button as disabled when cart is empty',()=>{

    const btn=fixture.debugElement.query(By.css('#checkout'));
    expect(btn.nativeElement.disabled).toBeTruthy();

  });
});