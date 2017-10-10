import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './post.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
