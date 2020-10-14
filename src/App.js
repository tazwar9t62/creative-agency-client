import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Review from './components/Dashboard/Review/Review';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [singleService, setSingleService] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser],[singleService,setSingleService]}>
      <Router>
        <Switch>
        <Route path="/login">
           <Login/>
          </Route>
          <Route path="/dashboard/review">
           <Review/>
          </Route>
          <Route path="/dashboard">
           <Dashboard/>
          </Route>
        <Route path="/home">
           <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
