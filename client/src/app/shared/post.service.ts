import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/djudo.token';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post-list/posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl) { }

  getPosts(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/posts/`)
  }

  getPost(id): Observable<Object> {
    return this.http.get(`${this.apiUrl}/posts/${id}/`);
  }

  getCategories(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/categories/`);
  }

}
