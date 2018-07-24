import 'semantic-ui-css/semantic.min.css';

import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Navbar  from './component/Navbar'
import Home from './component/Home';
import Meetings from './component/Meetings';

class App extends Component {
  
  render() {
    
    return <BrowserRouter>
      <Fragment>
        <Navbar/>
        <Route exact={true} path="/" component={Home} />
        <Route path="/meetings" component={Meetings} />
      </Fragment>
    </BrowserRouter>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);



