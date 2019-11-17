import { async, TestBed } from '@angular/core/testing';
import { WebUiModule } from './web-ui.module';

describe('WebUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebUiModule).toBeDefined();
  });
});
