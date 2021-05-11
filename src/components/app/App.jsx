import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"></Route>
        <Route path="/:name"></Route>
      </Switch>
    </Router>
  );
}
