import { TestBed } from '@angular/core/testing';

import { KitchensService } from './kitchens.service';

describe('KitchensService', () => {
  let service: KitchensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
