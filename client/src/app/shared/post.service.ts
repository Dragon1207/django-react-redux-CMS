import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/djudo.token';
import { Observable } from 'rxjs/Observable';
import { Post, Category } from '../post-list/posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/`)
      .map(res => res);
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}/`)
      .map(res => res);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`)
      .map(res => res);
  }

}
