import { TestBed, inject } from '@angular/core/testing';

import { RegistrationOperationsService } from './registration-operations.service';

describe('RegistrationOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationOperationsService]
    });
  });

  it('should be created', inject([RegistrationOperationsService], (service: RegistrationOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
