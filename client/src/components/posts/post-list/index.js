import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Post } from '../post/';

export class PostList extends React.Component {

  postList;

  constructor(props) {
    super(props);
  }

  render() {
    const postState = appStore.getState().posts.list;
    if (postState) {
      this.postList = postState.map(post =>
        <Post post={post}/>
      );
    }
    return (
      <section className={'post-list-container'}>
        {this.postList}
      </section>
    )
  }
}