import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   useParams,
} from 'react-router-dom';
import ElderHamContainer from '../../containers/ElderHamContainer';
import VillagerDetails from '../../containers/VillagerDetails';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ElderHamContainer} />
        <Route path="/villagers/:id" exact component={VillagerDetails} />
      </Switch>
    </Router>
  );
}
