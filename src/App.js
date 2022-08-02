import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './users/containers/Users';
import NewTravel from './travels/containers/NewTravel';
import UsersTravels from './travels/containers/UsersTravels';
import Navigation from './shared/components/Navigation/Navigation';
import TravelDetails from './travels/components/TravelDetails';
import UpdateTravell from './travels/containers/UpdateTravel';

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
          <Route path="/profile/:creatorId/travel/:id" exact>
            <TravelDetails/>
          </Route>
          <Route path="/travels/new">
            <NewTravel />
          </Route>
          <Route path="/travels/:placeId">
            <UpdateTravell />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;