import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Raa4Component } from './raa4.component';

describe('Raa4Component', () => {
  let component: Raa4Component;
  let fixture: ComponentFixture<Raa4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Raa4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Raa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
