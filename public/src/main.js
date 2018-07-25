//CSS
import "semantic-ui-css/semantic.min.css";

//Libraries
import React, { Component, Fragment } from "react";
import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk'
//App Components
import App from './component/App'

//Reducers
import  userReducer  from './reducers/user-reducer';
import  meetingReducer  from './reducers/meeting-reducer';

const allReducers = combineReducers({
  user: userReducer,
  meeting: meetingReducer
});

const allStoreEnhachers = compose (
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(
  allReducers, 
  {
    user:  "Nicu" ,
    meeting: [
      {
        meetingName: "Test Meeting",
      }
    ],
  },
  allStoreEnhachers
);

const root = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, root);