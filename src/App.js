import React from 'react';
import { Router, Route } from 'react-router-dom'
import Home from './home'
import history from './history'

import "./stylesheets/main.css"

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <Route to="/" render={() => <Home/>} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
