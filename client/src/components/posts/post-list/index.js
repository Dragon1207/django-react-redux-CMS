import React from 'react';
import { render } from 'react-dom';
import { loadPosts } from '../../../actions/post-actions';
import { appStore } from '../../../store';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export class PostList extends React.Component {

  postList;

  constructor(props) {
    super(props);
  }

  componentDidCatch(err) {
    console.log(err)
  }

  render() {
    const postState = appStore.getState().posts.list;
    if (postState) {
      this.postList = postState.map(post =>
        <Card key={post.id} >
          <CardHeader>  
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
          </CardHeader>  
        </Card>
      );
    }
    console.log(postState)
    return (
      <div>
        {this.postList}
      </div>
    )
  }
}