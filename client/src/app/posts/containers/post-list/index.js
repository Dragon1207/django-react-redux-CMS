import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { loadPosts, getPostDetail } from '../../../state/actions/post-actions';
import { loadCategories } from '../../../state/actions/category-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Post } from '../../components/post/index';
import CategoryPosts from '../../components/category-posts/index';
import { Link } from 'react-router-dom';

class PostList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadPosts());
  }

  render() {
    const { list, loading, post } = this.props
    return (
      list.map(post => (
        <Link to={`/posts/${post.id}`}>
          <Post key={post.id} post={post} />  
        </Link>  
      ))
    )
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  const { post, loading, list } = posts;
  return {
    loading,
    list,
    post
  }
}

export default connect(mapStateToProps)(PostList)