import { TestBed } from '@angular/core/testing';

import { AdditemsService } from './additems.service';

describe('AdditemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditemsService = TestBed.get(AdditemsService);
    expect(service).toBeTruthy();
  });
});
