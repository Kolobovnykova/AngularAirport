import { TestBed, inject } from '@angular/core/testing';

import { StewardessService } from './stewardess.service';

describe('StewardessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StewardessService]
    });
  });

  it('should be created', inject([StewardessService], (service: StewardessService) => {
    expect(service).toBeTruthy();
  }));
});
