import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

//Components
import Navbar from "./Navbar";
import Meetings from "./Meetings";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route path="/" component={Meetings} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  meeting: state.meeting
})

export default connect(mapStateToProps)(App);