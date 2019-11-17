import { TestBed, async, inject } from '@angular/core/testing';

import { WebAuthGuard } from './web-auth.guard';

describe('WebAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebAuthGuard]
    });
  });

  it('should ...', inject([WebAuthGuard], (guard: WebAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
