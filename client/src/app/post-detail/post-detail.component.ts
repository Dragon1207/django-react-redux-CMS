import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, ROOT_REDUCER } from '@app/state/index';
import { PostsQuery } from '@app/state/posts/post.reducers';
import { LoadPostsAction, LoadCategoriesAction, SelectPostAction } from '@app/state/posts/post.actions';
import { Post, Category } from '../post-list/posts';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'djudo-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post$: Store<Post>;

  constructor( private store: Store<AppState>, private router: ActivatedRoute ) { }

  ngOnInit() {
    let id = this.router.snapshot.params.id;
    this.store.dispatch(new SelectPostAction(id));
    this.post$ = this.store.select(PostsQuery.getPost);
  }

}
