import { TestBed, inject } from '@angular/core/testing';

import { VehicleOperationsService } from './vehicle-operations.service';

describe('VehicleOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleOperationsService]
    });
  });

  it('should be created', inject([VehicleOperationsService], (service: VehicleOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
