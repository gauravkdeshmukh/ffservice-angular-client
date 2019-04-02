import { TestBed } from '@angular/core/testing';

import { FfService } from './ff.service';

describe('FfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FfService = TestBed.get(FfService);
    expect(service).toBeTruthy();
  });
});
