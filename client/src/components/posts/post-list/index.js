import React from 'react';
import { render } from 'react-dom';
import { appStore } from '../../../reducers/';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componnentDidMount() {

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