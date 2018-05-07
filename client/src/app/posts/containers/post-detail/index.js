import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostDetail } from '../../../state/actions/post-actions';
import PostDetailComponent from '../../components/post-detail';

class PostDetail extends Component {

  componentDidMount() {
    let postId = this.props.match.params.number;
    this.props.dispatch(getPostDetail(postId));
  }

  render() {
    const { post } = this.props;
	  return <PostDetailComponent post={post} />
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  const { post } = posts;
  return {
    post
  }
}

export default connect(mapStateToProps)(PostDetail)
