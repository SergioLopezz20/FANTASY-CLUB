import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import League from './pages/League';
import Settings from './pages/Settings';

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
        </Switch>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
