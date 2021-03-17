import { TestBed } from '@angular/core/testing';

import { BakendService } from './backend.service';

describe('BackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BakendService = TestBed.get(BakendService);
    expect(service).toBeTruthy();
  });
});
