/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoronatrackerService } from './coronatracker.service';

describe('Service: Coronatracker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoronatrackerService]
    });
  });

  it('should ...', inject([CoronatrackerService], (service: CoronatrackerService) => {
    expect(service).toBeTruthy();
  }));
});
