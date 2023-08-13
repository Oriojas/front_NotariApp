import { TestBed } from '@angular/core/testing';

import { NftmintService } from './nftmint.service';

describe('NftmintService', () => {
  let service: NftmintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftmintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
