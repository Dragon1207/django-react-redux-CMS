import React from 'react';
import { render } from 'react-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card >
        <CardHeader>
          Post Title
        </CardHeader>
      </Card>
    )
  }
}