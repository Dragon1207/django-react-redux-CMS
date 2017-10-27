import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { loadPosts, getPostDetail } from '../../../state/actions/post-actions';
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
  }

  componentDidMount() {
    const { dispatch } = this.props;
    appStore.dispatch(loadPosts());
    appStore.dispatch(loadCategories());
  }

  render() {
    return (
      this.postState.map(post => <Post key={post.id} post={post} />)
    )
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  return {
    posts
  }
}

export default connect(mapStateToProps)(PostList)