import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { PostsService } from '@app/shared/post.service';
import { PostActionTypes, LoadPostsActionSuccess, LoadCategoriesActionSuccess } from '@app/state/posts/post.actions';
import { Post, Category } from '@app/post-list/posts';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PostEffects {
    constructor(
        private postsService: PostsService,
        private action$: Actions) { }

    @Effect() getPosts$ = this.action$
        .ofType(PostActionTypes.LOAD_POSTS)
        .switchMap(() => this.postsService.getPosts())
        .map((posts: Post[]) => new LoadPostsActionSuccess(posts));

    @Effect() getCategories$ = this.action$
        .ofType(PostActionTypes.LOAD_CATEGORIES)
        .switchMap(() => this.postsService.getCategories())
        .map((categories: Category[]) => new LoadCategoriesActionSuccess(categories));
}
