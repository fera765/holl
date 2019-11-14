import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={() => <div>Postagens</div>} />
      <Route path="/posts/:id" component={() => <div>Post 1</div>} />
    </Switch>
  );
}
