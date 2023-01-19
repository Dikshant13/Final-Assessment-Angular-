

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


  
  it('should check Product Name', () => {

    const e1 =fixture.debugElement.query(By.css('#name'));

    expect(e1).toBeTruthy();

  });

  it('should have ProductName type of text', () => {

    const e1 =fixture.debugElement.query(By.css('#name'));

    expect(e1.nativeElement.getAttribute('type')).toEqual('text');

  });


  it('should check Product Name input value is correct', () => {

    let name=component.addProduct.controls['name'];

    name.setValue('shirt');

    expect(name.errors).toBeNull();    

  });

 

  /* ---  test case for Product price --- */

  it('should check the input type of product name',()=>{
    const id3=fixture.debugElement.query(By.css('#name'));
    const id:any=component.addProduct.get("name");
    const id2='mobile';
    id.setValue(id2);

    fixture.detectChanges();
    expect(id3.nativeElement.value).toEqual(id2);

  });

  it('should check Product Price', () => {

    const e1 =fixture.debugElement.query(By.css('#price'));

    expect(e1).toBeTruthy();

  });

  it('should have Product Price type of number', () => {

    const e1 =fixture.debugElement.query(By.css('#price'));

    expect(e1.nativeElement.getAttribute('type')).toEqual('number');

  });

  it('should have name as Price', () => {

    const e1 =fixture.debugElement.query(By.css('#price'));

    expect(e1.nativeElement.getAttribute('name')).toEqual('price');

  });

  

 

   /* --- test case for Image --- */

 

  it('should check Image', () => {

    const e1 =fixture.debugElement.query(By.css('#image'));

    expect(e1).toBeTruthy();

  });

  // it('should have Image type of text', () => {

  //   const e1 =fixture.debugElement.query(By.css('#image'));

  //   expect(e1.nativeElement.getAttribute('type')).toEqual('text');

  // });

  it('should have name as image', () => {

    const e1 =fixture.debugElement.query(By.css('#image'));

    expect(e1.nativeElement.getAttribute('name')).toEqual('image');

  });

  it('should check image input value is correct', () => {

    let image=component.addProduct.controls['image'];

    image.setValue('../../assets/Mobile.jpeg');

    expect(image.errors).toBeNull();    

  });

 

/*  test --- case for Select dropdown --- */

 

  it('should check select',()=>{

    const e1 =fixture.debugElement.query(By.css('#sel')).nativeElement;

    let select=component.addProduct.controls['category'];

    select.setValue('products');

    expect(select.errors).toBeNull();

    e1.value=e1.options[1].value;

    fixture.detectChanges();

    let val=e1.options[e1.selectedIndex].label;

    expect(val).toEqual('fruits');

  })

 

});