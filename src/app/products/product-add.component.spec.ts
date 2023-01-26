

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductAddComponent } from './product-add.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ReactiveFormsModule,FormsModule, 
        StoreModule.forRoot({}),HttpClientTestingModule,BrowserAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductAddComponent ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  


  it('should check Product Name input value is correct', () => {

    let name=component.addProduct.controls['name'];

    name.setValue('shirt');

    expect(name.errors).toBeNull();    

  });

 
 


// =================================================

  it('should set submitted to true', () => {
    if(component.product)
    component.saveProduct(component.product);
    expect(component.added).toBeTruthy();
  });



  
  it('form should be valid', () => {
    component.addProduct.controls['id'].setValue('1');
    component.addProduct.controls['name'].setValue('mobile');
    component.addProduct.controls['category'].setValue('electronic');
    component.addProduct.controls['price'].setValue('25000');
    component.addProduct.controls['image'].setValue('qwerty');
    component.addProduct.controls['rating'].setValue('qwerty');
    expect(component.addProduct.valid).toBeTruthy();
  });



  it('price field validity', () => {
    const price = component.addProduct.controls['price'];
    expect(price.valid).toBeFalsy();

    price.setValue('');
    expect(price.hasError('required')).toBeTruthy();

  });





  it('rating field validity', () => {
    const phone = component.addProduct.controls['rating'];
    phone.setValue('');
    expect(phone.valid).toBeFalsy();

    phone.setValue('');
    expect(phone.hasError('required')).toBeTruthy();

  });


  it('category field validity require', () => {
    const category = component.addProduct.controls['category'];

    category.setValue('');
    expect(category.hasError('required')).toBeTruthy();
  });

  it('category field validity', () => {
    const category = component.addProduct.controls['category'];
    category.setValue('');
    expect(category.valid).toBeFalsy();

    
  });




  it('name field validity', () => {
    const name = component.addProduct.controls['name'];
    name.setValue('');
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });



  it('form invalid when empty', () => {
    component.addProduct.controls['id'].setValue('');
    component.addProduct.controls['name'].setValue('');
    component.addProduct.controls['category'].setValue('');
    component.addProduct.controls['price'].setValue('');
    component.addProduct.controls['image'].setValue('');
    expect(component.addProduct.valid).toBeFalsy();
  });
  

});






