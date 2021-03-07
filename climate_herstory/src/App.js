import React from 'react';
import {useRoutes} from 'hookrouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Story from './components/Story';
import Intro from './components/Intro';
import GPS from './components/history/GPS';
import Pesticides from './components/history/Pesticides';
import Steak from './components/history/Steak';
//Handling path routes
function App() {
  // const routeResult = useRoutes(routes)
  // return routeResult

  return(
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/story">
            <Story />
        </Route>
        <Route path="/gladys">
            <GPS />
        </Route>
        <Route path="/rachel">
            <Pesticides />
        </Route>
        <Route path="/greta">
            <Steak />
        </Route>
        </Switch>
        </Router>
  );
  
}

export default App;
