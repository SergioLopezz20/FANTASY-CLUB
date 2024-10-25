import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import League from './pages/League';
import Settings from './pages/Settings';
import Classification from './pages/Classification';
import Squad from './pages/Squad';
import Market from './pages/Market';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/players" component={Players} />
          <Route path="/league" component={League} />
          <Route path="/settings" component={Settings} />
          <Route path="/classification" component={Classification} />
          <Route path="/squad" component={Squad} />
          <Route path="/market" component={Market} />
        </Switch>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
