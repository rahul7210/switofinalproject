import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlogoComponent } from './cartlogo.component';

describe('CartlogoComponent', () => {
  let component: CartlogoComponent;
  let fixture: ComponentFixture<CartlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
