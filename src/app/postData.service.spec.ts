import { TestBed } from '@angular/core/testing';

import { PostDataService } from './postData.service';

describe('PostDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDataService = TestBed.get(PostDataService);
    expect(service).toBeTruthy();
  });
});
