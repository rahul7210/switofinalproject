import { TestBed } from '@angular/core/testing';

import { ViewordrService } from './viewordr.service';

describe('ViewordrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewordrService = TestBed.get(ViewordrService);
    expect(service).toBeTruthy();
  });
});
