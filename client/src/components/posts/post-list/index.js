import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const { posts } = appStore.getState();

export class PostList extends React.Component {

  posts;
  subscription;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    appStore.dispatch(loadPosts());
    this.posts = appStore.getState();
    console.log(this.posts);
  }

  render() {
    return (
      <Card >
        <CardHeader>
          <pre>{appStore.getState(posts).toString()}</pre>
        </CardHeader>
      </Card>
    )
  }
}