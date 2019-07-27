import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noti2Component } from './noti2.component';

describe('Noti2Component', () => {
  let component: Noti2Component;
  let fixture: ComponentFixture<Noti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
