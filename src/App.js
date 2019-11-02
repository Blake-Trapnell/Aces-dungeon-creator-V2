import React, {Component} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom"
import routes from './routes'
import {withRouter} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <HashRouter>
    <div id="App" className="App">
      {routes}
    </div>
    </HashRouter>
  );
} 
}

export default withRouter(App);
