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
    let categories = []

    for (const category of categoryState) {
      categories.push({
        title: <h1 key={category.id}>{category.title}</h1>,
        posts: []
      })
      for (const post of postState) {
        for (const item of categories) {
          item.posts.push(category.title == post.category_obj.title
            ? <Post key={post.id} post={post} /> : '')
        }
      }
    }

    return (
      <section className={'post-list-container'}>
        <div>
          {categories.map(category => (
            <div>
              <h1>{category.title}</h1>
              <div>{category.posts.map(post => post)}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}