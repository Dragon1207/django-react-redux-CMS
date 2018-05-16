import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostList from './post-list/post-list.container';
import PostDetail from './post-detail/post-detail.container';

export default function Posts() {
  return (
    <Switch>
      <Route exact path='/posts' component={PostList} />
      <Route path='/posts/:number' component={PostDetail} />
    </Switch>
  )
}