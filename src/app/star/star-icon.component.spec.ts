import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StarIconComponent } from './star-icon.component';

describe('StarIconComponent', () => {
  let component: StarIconComponent;
  let fixture: ComponentFixture<StarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Input correctly',()=>{
    component.message="Star Icon App";
    fixture.detectChanges();

    const rootEle:DebugElement = fixture.debugElement;
    
    const h1 =rootEle.query(By.css('.msg'));

    const h1Element:HTMLElement= h1.nativeElement;

    expect(h1Element.textContent).toContain('Star Icon App');
  });

  
});
