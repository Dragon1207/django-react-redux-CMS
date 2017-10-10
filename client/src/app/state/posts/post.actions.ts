import { Action } from '@ngrx/store';
import { Post, Category } from '@app/post-list/posts';

export enum PostActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESSFULLY = '[Post] Load Posts Successfully',
    LOAD_CATEGORIES = '[Post] Load Categories',
    LOAD_CATEGORIES_SUCCESSFULLY = '[Post] Load Categories Successfully'
}

export class LoadPostsAction implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsActionSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESSFULLY;
    constructor(public payload: Post[]) { }
}

export class LoadCategoriesAction implements Action {
    readonly type = PostActionTypes.LOAD_CATEGORIES;
}

export class LoadCategoriesActionSuccess implements Action {
    readonly type = PostActionTypes.LOAD_CATEGORIES_SUCCESSFULLY;
    constructor(public payload: Category[]) { }
}

export type PostActions = LoadPostsActionSuccess | LoadCategoriesActionSuccess;
