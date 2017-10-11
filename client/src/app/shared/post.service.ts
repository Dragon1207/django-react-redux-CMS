import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/djudo.token';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl) { }

  getPosts() {
    return this.http.get(`${this.apiUrl}/posts/`);
  }

  getPost(id) {
    return this.http.get(`${this.apiUrl}/posts/${id}/`);
  }

  getCategories() {
    return this.http.get(`${this.apiUrl}/categories/`);
  }

}
