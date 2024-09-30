import { TestBed } from '@angular/core/testing';

import { ContentClientService } from './content-client.service';

describe('ContentClientService', () => {
  let service: ContentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
