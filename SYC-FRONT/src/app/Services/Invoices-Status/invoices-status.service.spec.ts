import { TestBed } from '@angular/core/testing';

import { InvoicesStatusService } from './invoices-status.service';

describe('InvoicesStatusService', () => {
  let service: InvoicesStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicesStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
