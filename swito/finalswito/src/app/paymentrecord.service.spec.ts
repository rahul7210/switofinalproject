import { TestBed } from '@angular/core/testing';

import { PaymentrecordService } from './paymentrecord.service';

describe('PaymentrecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentrecordService = TestBed.get(PaymentrecordService);
    expect(service).toBeTruthy();
  });
});
