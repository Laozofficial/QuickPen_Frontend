import { TestBed, inject } from '@angular/core/testing';

import { PensService } from './pens.service';

describe('PensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PensService]
    });
  });

  it('should be created', inject([PensService], (service: PensService) => {
    expect(service).toBeTruthy();
  }));
});
