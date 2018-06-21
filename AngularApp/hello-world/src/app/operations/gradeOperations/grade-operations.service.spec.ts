import { TestBed, inject } from '@angular/core/testing';

import { GradeOperationsService } from './grade-operations.service';

describe('GradeOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeOperationsService]
    });
  });

  it('should be created', inject([GradeOperationsService], (service: GradeOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
