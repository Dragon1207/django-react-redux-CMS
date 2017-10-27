import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../../../state/actions/post-actions';
import { appStore } from '../../../store';
import { Post } from '../../components/post/index';

class PostList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadPosts());
  }

  render() {
    const { list, loading } = this.props
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
    list
  }
}

export default connect(mapStateToProps)(PostList)