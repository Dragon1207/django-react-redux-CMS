import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { loadCategories } from '../../../actions/category-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Post } from '../post/';

export class PostList extends React.Component {

  postState = appStore.getState().posts.list;
  categoryState = appStore.getState().categories.list;
  categories = [];

  constructor(props) {
    super(props);
    appStore.dispatch(loadPosts());
    appStore.dispatch(loadCategories());
  }

  render() {

    this.categoryState.map(category => {
      this.categories.push({
        title: <h1 key={category.id}>{category.title}</h1>,
        posts: []
      })
      this.postState.map(post => {
        this.categories.map(item => {
          if (category.title == post.category_obj.title) {
            item.posts.push(<Post key={post.id} post={post} />)
          }
        })
      })
    })

    return (
      <section className={'post-list-container'}>
        <div>
          {this.categories.map(category => (
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