import { TestBed } from '@angular/core/testing';

import { FgService } from './fg.service';

describe('FgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgService = TestBed.get(FgService);
    expect(service).toBeTruthy();
  });
});
