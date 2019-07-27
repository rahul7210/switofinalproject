import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenidComponent } from './tokenid.component';

describe('TokenidComponent', () => {
  let component: TokenidComponent;
  let fixture: ComponentFixture<TokenidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
