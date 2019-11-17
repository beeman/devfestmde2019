import { TestBed } from '@angular/core/testing';

import { WebAuthService } from './web-auth.service';

describe('WebAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebAuthService = TestBed.get(WebAuthService);
    expect(service).toBeTruthy();
  });
});
