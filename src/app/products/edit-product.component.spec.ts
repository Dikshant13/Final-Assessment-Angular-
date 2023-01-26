

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditProductComponent } from './edit-product.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ReactiveFormsModule,FormsModule, 
        StoreModule.forRoot({}),HttpClientTestingModule,BrowserAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA],
      declarations: [ EditProductComponent ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  


  it('should check Product Name input value is correct', () => {

    let name=component.editProduct.controls['name'];

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
    component.editProduct.controls['id'].setValue('2');
    component.editProduct.controls['name'].setValue('Pizza');
    component.editProduct.controls['category'].setValue('food');
    component.editProduct.controls['price'].setValue('180');
    component.editProduct.controls['image'].setValue('qwerty');
    component.editProduct.controls['rating'].setValue('3.5');
    expect(component.editProduct.valid).toBeTruthy();
  });



  it('price field validity', () => {
    const price = component.editProduct.controls['price'];
    expect(price.valid).toBeFalsy();

    price.setValue('');
    expect(price.hasError('required')).toBeTruthy();

  });





  it('rating field validity', () => {
    const phone = component.editProduct.controls['rating'];
    phone.setValue('');
    expect(phone.valid).toBeFalsy();

    phone.setValue('');
    expect(phone.hasError('required')).toBeTruthy();

  });


  it('category field validity require', () => {
    const category = component.editProduct.controls['category'];

    category.setValue('');
    expect(category.hasError('required')).toBeTruthy();
  });

  it('category field validity', () => {
    const category = component.editProduct.controls['category'];
    category.setValue('');
    expect(category.valid).toBeFalsy();

    
  });




  it('name field validity', () => {
    const name = component.editProduct.controls['name'];
    name.setValue('');
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });



  it('form invalid when empty', () => {
    component.editProduct.controls['id'].setValue('');
    component.editProduct.controls['name'].setValue('');
    component.editProduct.controls['category'].setValue('');
    component.editProduct.controls['price'].setValue('');
    component.editProduct.controls['image'].setValue('');
    expect(component.editProduct.valid).toBeFalsy();
  });
  

});
