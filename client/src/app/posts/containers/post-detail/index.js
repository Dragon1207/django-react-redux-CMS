import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostDetail } from '../../../state/actions/post-actions';
import { appStore } from '../../../store';

class PostDetail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let postId = this.props.match.params.number;
    this.props.dispatch(getPostDetail(postId));
  }

  render() {
    const { post, loading } = this.props;
    if (loading) {
      return <p>loading...</p>
    } else {
      return (
        <h1>{post.title}</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  const { posts } = state || {};
  const { post, loading } = posts;
  return {
    post,
    loading
  }
}

export default connect(mapStateToProps)(PostDetail)
