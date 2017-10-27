import React from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import { Card } from 'material-ui/Card';

export default function DjudoComments(props) {
  return (
    <Card>
      <FacebookProvider appId='684364055102311'>
        <Comments href={`http://djudo.com/posts/${props.id}`} />
      </FacebookProvider>
    </Card>
  )
}