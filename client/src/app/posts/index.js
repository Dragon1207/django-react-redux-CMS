import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostList from './containers/post-list';
import PostDetail from './containers/post-detail';

export default function Posts() {
  return (
    <Switch>
      <Route exact path='/posts' component={PostList} />
      <Route path='/posts/:number' component={PostDetail} />
    </Switch>
  )
}