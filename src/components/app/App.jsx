import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ElderHamContainer from '../../containers/ElderHamContainer';
import VillagerDetails from '../../containers/VillagerDetails';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <ElderHamContainer />
        </Route>
        <Route path="/villagers/:name">
          <VillagerDetails />
        </Route>
      </Switch>
    </Router>
  );
}
