import { TestBed } from '@angular/core/testing';

import { AllowToPassService } from './allow-to-pass.service';

describe('AllowToPassService', () => {
  let service: AllowToPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowToPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
