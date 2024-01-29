import { TestBed } from '@angular/core/testing';

import { NjLaunchService } from './nj-launch.service';

describe('NjLaunchService', () => {
  let service: NjLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NjLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
