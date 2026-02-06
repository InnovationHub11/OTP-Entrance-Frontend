import { TestBed } from '@angular/core/testing';

import { VehicleLogSevice } from './vehicle-log-sevice';

describe('VehicleLogSevice', () => {
  let service: VehicleLogSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleLogSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
