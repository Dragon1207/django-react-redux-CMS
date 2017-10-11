import { Component, OnInit } from '@angular/core';
import { PostsService } from '@app/shared/post.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadPostsAction, LoadCategoriesAction, SelectPostAction } from '@app/state/posts/post.actions';
import { Post, Category } from './posts';
import { Observable } from 'rxjs/Observable';
import { PostsQuery } from '@app/state/posts/post.reducers';
import { AppState } from '@app/state';

@Component({
  selector: 'djudo-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  categories$: Observable<Category[]>

  constructor(
    private postsService: PostsService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadPostsAction());
    this.posts$ = this.store.select(PostsQuery.getPosts);
    this.store.dispatch(new LoadCategoriesAction());
    this.categories$ = this.store.select(PostsQuery.getCategories);
  }

  getPost(id: number) {
    this.store.dispatch(new SelectPostAction(id));
    this.router.navigate(['posts', id]);
  }
}
