import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './users/containers/Users';
import NewTravel from './travels/containers/NewTravel';
import UsersTravels from './travels/containers/UsersTravels';
import Navigation from './shared/components/Navigation/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/profile">
            <UsersTravels />
          </Route>
          <Route path="/:userId/profile/:creatorId">
            <UsersTravels />
          </Route>
          <Route path="/travels/new">
            <NewTravel />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;