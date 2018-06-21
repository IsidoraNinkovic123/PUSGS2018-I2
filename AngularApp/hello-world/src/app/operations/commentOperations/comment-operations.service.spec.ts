import { TestBed, inject } from '@angular/core/testing';

import { CommentOperationsService } from './comment-operations.service';

describe('CommentOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentOperationsService]
    });
  });

  it('should be created', inject([CommentOperationsService], (service: CommentOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
