import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noti3Component } from './noti3.component';

describe('Noti3Component', () => {
  let component: Noti3Component;
  let fixture: ComponentFixture<Noti3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noti3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noti3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
