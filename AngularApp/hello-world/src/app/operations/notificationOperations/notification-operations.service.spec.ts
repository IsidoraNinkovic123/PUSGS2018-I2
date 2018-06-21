import { TestBed, inject } from '@angular/core/testing';

import { NotificationOperationsService } from './notification-operations.service';

describe('NotificationOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationOperationsService]
    });
  });

  it('should be created', inject([NotificationOperationsService], (service: NotificationOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
