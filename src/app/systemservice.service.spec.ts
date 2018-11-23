import { TestBed, inject } from '@angular/core/testing';

import { SystemserviceService } from './systemservice.service';

describe('SystemserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemserviceService]
    });
  });

  it('should be created', inject([SystemserviceService], (service: SystemserviceService) => {
    expect(service).toBeTruthy();
  }));
});
