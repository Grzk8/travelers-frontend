import React, { useState, useContext, useCallback } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Users from './users/containers/Users';
import NewTravel from './travels/containers/NewTravel';
import UsersTravels from './travels/containers/UsersTravels';
import Navigation from './shared/components/Navigation/Navigation';
import TravelDetails from './travels/components/TravelDetails';
import UpdateTravell from './travels/containers/UpdateTravel';
import Auth from './users/containers/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/profile/:creatorId/travel/:id" exact>
          <TravelDetails />
        </Route>
        <Route path="/users/:userId">
          <UsersTravels />
        </Route>
        <Route path="/travels/new">
          <NewTravel />
        </Route>
        <Route path="/travels/:placeId">
          <UpdateTravell />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/profile">
          <UsersTravels />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      userId: userId,
      login: login,
      logout: logout
    }}>
      <BrowserRouter>
        <Navigation />
        <main>
          {routes}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;