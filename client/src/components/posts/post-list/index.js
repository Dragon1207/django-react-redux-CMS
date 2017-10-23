import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const { posts } = appStore.getState();

export class PostList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { posts } = appStore.getState();
    console.log(posts.list);
  }

  componentDidCatch(err) {
    console.log(err)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}