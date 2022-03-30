import { TestBed } from '@angular/core/testing';

import { TransformAnswersService } from './transform-answers.service';

describe('TransformAnswersService', () => {
  let service: TransformAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
