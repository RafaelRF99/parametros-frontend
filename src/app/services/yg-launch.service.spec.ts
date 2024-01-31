import { TestBed } from '@angular/core/testing';

import { YgLaunchService } from './yg-launch.service';

describe('YgLaunchService', () => {
  let service: YgLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YgLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
