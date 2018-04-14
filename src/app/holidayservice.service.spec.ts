import { TestBed, inject } from '@angular/core/testing';

import { HolidayserviceService } from './holidayservice.service';

describe('HolidayserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayserviceService]
    });
  });

  it('should be created', inject([HolidayserviceService], (service: HolidayserviceService) => {
    expect(service).toBeTruthy();
  }));
});
