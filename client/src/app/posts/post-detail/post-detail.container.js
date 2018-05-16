import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostDetail } from '../post-actions';
import PostDetailComponent from './post-detail.component';

class PostDetail extends Component {

  constructor(props) {
    super(props);
  }

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
