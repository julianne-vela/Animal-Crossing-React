import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   useParams,
} from 'react-router-dom';
import ElderhamContainer from '../../containers/ElderhamContainer';
import VillagerContainer from '../../containers/VillagerContainer';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ElderhamContainer} />
        <Route path="/villagers/:id" exact component={VillagerContainer} />
      </Switch>
    </Router>
  );
}
