import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../state/actions/post-actions';
import { loadCategories } from '../../../state/actions/category-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Post } from '../../components/post/index';
import CategoryPosts from '../../components/category-posts/index';

class PostList extends React.Component {

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
        id: category.id,
        title: <div key={category.id}>{category.title}</div>,
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
      <CategoryPosts categories={this.categories} />
    )
  }
}

export default PostList