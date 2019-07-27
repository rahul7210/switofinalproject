import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedpassComponent } from './updatedpass.component';

describe('UpdatedpassComponent', () => {
  let component: UpdatedpassComponent;
  let fixture: ComponentFixture<UpdatedpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
