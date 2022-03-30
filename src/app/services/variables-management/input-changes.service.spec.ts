import { TestBed } from '@angular/core/testing';

import { InputChangesService } from './input-changes.service';

describe('InputChangesService', () => {
  let service: InputChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
