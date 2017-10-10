import { Action } from '@ngrx/store';
import { Post, Category } from '@app/post-list/posts';
import { PostActionTypes, PostActions } from '@app/state/posts/post.actions';
import { AppState } from '../index';

export interface PostsState {
    list: Post[];
    selectedId: number | null;
    categories: Category[]
}

const INITIAL_STATE: PostsState = {
    list: [],
    selectedId: null,
    categories: []
}

export function postReducers(state: PostsState = INITIAL_STATE, action: PostActions): PostsState {
    switch(action.type) {
        case PostActionTypes.LOAD_POSTS_SUCCESSFULLY:
            return { ...state, list: action.payload }
        case PostActionTypes.LOAD_CATEGORIES_SUCCESSFULLY:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}

export namespace PostsQuery {
    export const getPosts = (state: AppState) => state.posts.list;
    export const getCategories = (state: AppState) => state.posts.categories;
}
