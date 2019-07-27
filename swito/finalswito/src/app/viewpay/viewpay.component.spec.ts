import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpayComponent } from './viewpay.component';

describe('ViewpayComponent', () => {
  let component: ViewpayComponent;
  let fixture: ComponentFixture<ViewpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
