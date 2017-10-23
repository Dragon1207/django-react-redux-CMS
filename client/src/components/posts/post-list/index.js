import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { loadCategories } from '../../../actions/category-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Post } from '../post/';

export class PostList extends React.Component {

  postList;

  constructor(props) {
    super(props);
    appStore.dispatch(loadPosts());
    appStore.dispatch(loadCategories());
  }

  render() {
    const postState = appStore.getState().posts.list;
    const categoryState = appStore.getState().categories.list;
    return (
      <section className={'post-list-container'}>
        <div>
          {
            categoryState ? categoryState.map(category => <h1 key={category.id}>{category.title}</h1>)
              : <p>No categories</p>  
          }
          <div>
            {
              postState ? postState.map(post => <Post key={post.id} post={post} />)
                : <p>No posts to show.</p>
            }
          </div>
        </div>
      </section>
    )
  }
}