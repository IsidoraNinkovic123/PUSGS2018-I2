import { TestBed, inject } from '@angular/core/testing';

import { ServiceOperations } from './ServiceOperations.service';

describe('AddServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceOperations]
    });
  });

  it('should be created', inject([ServiceOperations], (service: ServiceOperations) => {
    expect(service).toBeTruthy();
  }));
});
