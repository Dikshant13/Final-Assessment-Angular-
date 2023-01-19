import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let el: HTMLElement;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test cases
  

  it('should have type text for firstname', () => {
    const element=fixture.debugElement.query(By.css('#firstname'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have type text for lastname', () => {
    const element=fixture.debugElement.query(By.css('#lastname'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have type text for store', () => {
    const element=fixture.debugElement.query(By.css('#store'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  });
  
  it('should have as title `contact us`', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact us');
  });
});
