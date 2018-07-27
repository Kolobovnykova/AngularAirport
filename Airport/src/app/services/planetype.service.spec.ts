import { TestBed, inject } from '@angular/core/testing';

import { PlanetypeService } from './planetype.service';

describe('PlanetypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetypeService]
    });
  });

  it('should be created', inject([PlanetypeService], (service: PlanetypeService) => {
    expect(service).toBeTruthy();
  }));
});
