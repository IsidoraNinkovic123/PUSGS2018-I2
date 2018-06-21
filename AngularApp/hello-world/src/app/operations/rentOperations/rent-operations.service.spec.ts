import { TestBed, inject } from '@angular/core/testing';

import { RentOperationsService } from './rent-operations.service';

describe('RentOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentOperationsService]
    });
  });

  it('should be created', inject([RentOperationsService], (service: RentOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
