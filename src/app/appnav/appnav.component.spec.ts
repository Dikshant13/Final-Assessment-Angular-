

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../users/authservice';

import { AppnavComponent } from './appnav.component';

describe('AppnavComponent', () => {
  let component: AppnavComponent;
  let fixture: ComponentFixture<AppnavComponent>;
  let authService:AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppnavComponent ],
      imports:[MatToolbarModule,FormsModule,MatIconModule,RouterModule,RouterTestingModule,MatBadgeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have login when user not logged in',()=>{
    expect(fixture.debugElement.query(By.css('#but'))).toBeTruthy();
  });
  
  it("should not have logout when user isn't logged in",()=>{
    expect(fixture.debugElement.query(By.css('#logout'))).toBeFalsy();
  });

  it('should have the Products',()=>{

        expect(fixture.debugElement.query(By.css('#product'))).toBeTruthy();
    
        const products:HTMLElement=fixture.debugElement.query(By.css('#product')).nativeElement;
        expect(products.textContent).toEqual('Product');
    
      });



      
  //It tests that there is home in navbar or not
  it('should have the Home',()=>{
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();


  });

  
  it('should have about us',()=>{
    expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();
  });

  
  it('should have contact us',()=>{
    expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();
  });

  
  it('should have carts',()=>{
    expect(fixture.debugElement.query(By.css('#carts'))).toBeTruthy();
  });

  
  it('should have login button',()=>{
    expect(fixture.debugElement.query(By.css('#but'))).toBeTruthy();
  });


});






















// import { HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { RouterModule } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from '../users/authservice';


// import { AppnavComponent } from './appnav.component';

// //For describing the header component testcases
// describe('AppnavComponent', () => {
//   let component: AppnavComponent;
//   let fixture: ComponentFixture<AppnavComponent>;

//   //For declaring the component and importing the necessary modules
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AppnavComponent ],
//       imports: [HttpClientModule]
//     })
//     .compileComponents();

//     //Creating the testbed for header component
//     fixture = TestBed.createComponent(AppnavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   //It tests that the component is created or not
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   //It tests that there is home in navbar or not
//   it('should have the Home',()=>{
//     expect(fixture.debugElement.query(By.css('#apphome'))).toBeTruthy();

//     const home:HTMLElement=fixture.debugElement.query(By.css('#apphome')).nativeElement;
//     expect(home.textContent).toEqual('Home (current)');

//   });

//   //It tests that there is products in navbar or not
//   it('should have the Products',()=>{

//     expect(fixture.debugElement.query(By.css('#products'))).toBeTruthy();

//     const products:HTMLElement=fixture.debugElement.query(By.css('#products')).nativeElement;
//     expect(products.textContent).toEqual('Products');

//   });

//   //It tests that there is aboutus in navbar or not
//   it('should have the AboutUs',()=>{

//     expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();

//     const about:HTMLElement=fixture.debugElement.query(By.css('#aboutus')).nativeElement;
//     expect(about.textContent).toEqual('About Us');

//   });

//   //It tests that there is contactus in navbar or not
//   it('should have the Contact Us',()=>{

//     expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();

//     const contact:HTMLElement=fixture.debugElement.query(By.css('#contactus')).nativeElement;
//     expect(contact.textContent).toEqual('Contact Us');

//   });

//   //It tests that there is login button in navbar or not
//   it('should have the login button',()=>{

//     expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();

//   });

// //  it('should have the logout button when logged in',()=>{

// //     component.isLogIn=true;

// //     fixture.detectChanges();

// //     expect(fixture.debugElement.query(By.css('#logOut'))).toBeTruthy();

// //   });
  
// });



