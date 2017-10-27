import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import * as moment from 'moment';

import { getPostDetail } from '../../../state/actions/post-actions';
import { appStore } from '../../../store';
import DjudoComments from '../../components/comments';

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
        <section className='post-detail-container'>
          <Card>
            <div className='post-body'>
              <div className='flex post-header-container '>
                <div className='flex-9'>
                  <h1 className='post-title'>{post.title}</h1>
                </div>
                <div className='flex-3 post-info flex flex-column'>
                  <div className='flex-row'>
                    <span className='flex-3'>Published:</span>
                    <p>{moment(post.created).format('L')}</p>
                  </div>
                  <div className='flex-row'>
                    <span className='flex-3'>Category:</span>
                    <p>{post.category_obj.title}</p>
                  </div>
                </div>
              </div>
              <p>{post.body}</p>
            </div>
          </Card>

          <div className='post-detail-comments'>
            <DjudoComments id={post.id} />
          </div>
        </section>
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
