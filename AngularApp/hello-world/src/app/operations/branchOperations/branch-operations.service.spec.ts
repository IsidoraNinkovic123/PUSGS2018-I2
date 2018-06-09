import { TestBed, inject } from '@angular/core/testing';

import { BranchOperationsService } from './branch-operations.service';

describe('BranchOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchOperationsService]
    });
  });

  it('should be created', inject([BranchOperationsService], (service: BranchOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
