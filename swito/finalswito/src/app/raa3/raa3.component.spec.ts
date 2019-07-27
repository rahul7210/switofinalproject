import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Raa3Component } from './raa3.component';

describe('Raa3Component', () => {
  let component: Raa3Component;
  let fixture: ComponentFixture<Raa3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Raa3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Raa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
