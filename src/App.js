import React , { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar  from './components/NavigationBar';
import WelcomePanel from './components/WelcomePanel';
import RoutesPanel from './components/Routes';
import PopularityPanel from './components/Popularity';
import AirportsPanel from './components/Airports';


function App() {

  return (
    <div >
    <React.Fragment>
      <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={WelcomePanel} />
          <Route exact path="/airports" component={AirportsPanel} />
          <Route exact path="/routes" component={RoutesPanel} />
          <Route exact path="/popularity" component={PopularityPanel} />
          {/* <Route exact path="/calculating" render={(props) => <Calculating {...props} projectName={props.location.state} />}></Route> */}
        </Switch>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default App;
