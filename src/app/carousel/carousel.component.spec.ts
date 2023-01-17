// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CarouselComponent } from './carousel.component';

// describe('CarouselComponent', () => {
//   let component: CarouselComponent;
//   let fixture: ComponentFixture<CarouselComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CarouselComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CarouselComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });






import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      // imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the bootstrap carousel', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ngb-carousel')).not.toBeNull();
  }));
});
