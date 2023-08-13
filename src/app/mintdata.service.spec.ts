import { TestBed } from '@angular/core/testing';

import { MintdataService } from './mintdata.service';

describe('MintdataService', () => {
  let service: MintdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MintdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
