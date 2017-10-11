import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { PostsService } from '@app/shared/post.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { PostActionTypes, LoadPostsActionSuccess, LoadCategoriesActionSuccess, SelectPostActionSuccess } from '@app/state/posts/post.actions';
import { Post, Category } from '@app/post-list/posts';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostEffects {
    constructor(
        private postsService: PostsService,
        private action$: Actions,
        private router: Router) { }

    @Effect() getPosts$ = this.action$
        .ofType(PostActionTypes.LOAD_POSTS)
        .switchMap(() => this.postsService.getPosts())
        .map((posts: Post[]) => new LoadPostsActionSuccess(posts));

    @Effect() getCategories$ = this.action$
        .ofType(PostActionTypes.LOAD_CATEGORIES)
        .switchMap(() => this.postsService.getCategories())
        .map((categories: Category[]) => new LoadCategoriesActionSuccess(categories));

    @Effect() selectPost$ = this.action$
        .ofType(PostActionTypes.SELECT_POST)
        .map(toPayload)
        .switchMap((id: number) => this.postsService.getPost(id))
        .map((post: Post) => new SelectPostActionSuccess(post));
}
