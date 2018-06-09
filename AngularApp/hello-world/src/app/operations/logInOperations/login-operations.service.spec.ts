import { TestBed, inject } from '@angular/core/testing';

import { LoginOperationsService } from './login-operations.service';

describe('LoginOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginOperationsService]
    });
  });

  it('should be created', inject([LoginOperationsService], (service: LoginOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
