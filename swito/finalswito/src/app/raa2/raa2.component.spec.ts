import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Raa2Component } from './raa2.component';

describe('Raa2Component', () => {
  let component: Raa2Component;
  let fixture: ComponentFixture<Raa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Raa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Raa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
