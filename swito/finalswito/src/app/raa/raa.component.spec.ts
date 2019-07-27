import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaaComponent } from './raa.component';

describe('RaaComponent', () => {
  let component: RaaComponent;
  let fixture: ComponentFixture<RaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
