//CSS
import "../../semantic/dist/semantic.min.css";
import "./css/mains.scss"
//Libraries
import React, { Component, Fragment } from "react";
import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk'
//App Components
import App from './component/App'

//Reducers
import userReducer from './reducers/user-reducer';
import meetingReducer from './reducers/meeting-reducer';

const allReducers = combineReducers({
  user: userReducer,
  meeting: meetingReducer
});

const allStoreEnhachers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(
  allReducers,
  {
    "user": {
      "id": "224asdf12a54s1osdfmnjg",
      "name": "Nicu",
      "token": "00000000000",
      "tokenExpiration": 1533054442,
      "email": "nicu@parente.com",
      "profileImageUrl": "https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4"
    },
    "meeting": {
      "id": "9xz81930d01konm013",
      "name": "Install Azure Faster",
      "date": 1533060000,
      "location": "Building 42/24",
      "organizer": {
        "name": "Nicu",
        "email": "nicu@parente.com",
        "profileImage": "https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4"
      },
      "participants": [
        {
          "name": "Nicu",
          "id": "224asdf12a54s1osdfmnjg",
          "email": "nicu@parente.com",
          "profileImage": "https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4"
        },
        {
          "name": "Rachel",
          "id": "54312df12a54s1osdfmnjg",
          "email": "rachel@boop.com",
          "profileImage": "https://react.semantic-ui.com/images/avatar/small/rachel.png"
        },
        {
          "name": "Matt",
          "id": "525555df12a54s1osdfmnjg",
          "email": "matt@boop.com",
          "profileImage": "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        },
        {
          "name": "Joe",
          "id": "8f1286103a54s1osdfmnjg",
          "email": "joe@boop.com",
          "profileImage": "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
        }
      ],
      "topics": [
        {
          "title": "How do we install Azure?",
          "description": "The current documentation about installing Azure states that we need to buy potatoes. Lots and lots of potatoes. This is becoming a scalablity issue due to the sheer amount of excess fries we get from the potatoes.",
          "thread": [
            {
              "author": "Matt",
              "id": "525555df12a54s1osdfmnjg",
              "email": "matt@boop.com",
              "profileImage": "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
              "date": 1532457008,
              "content": "Can the documentation be made out of potato skin?",
              "replies": []
            },
            {
              "author": "Rachel",
              "id": "54312df12a54s1osdfmnjg",
              "email": "rachel@boop.com",
              "profileImage": "https://react.semantic-ui.com/images/avatar/small/rachel.png",
              "date": 1532543408,
              "content": "This has been very useful for my research. Thanks as well!",
              "replies": []
            },
            {
              "author": "Matt",
              "id": "525555df12a54s1osdfmnjg",
              "email": "matt@boop.com",
              "profileImage": "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
              "date": 1532484368,
              "content": "#PlusOneHeartReactsOnly",
              "replies": []
            }
          ]
        },
        {
          "title": "Explore the possibility of using Red Bull to speed up servers during peak hours",
          "description": "Rumor has it pouring Red Bull on server racks overclocks the servers. Since we already placed a datacenter  underwater, so why not?",
          "threads": []
        },
        {
          "title": "CI/CD Improvements for the next semester",
          "description": "Bacon ipsum dolor amet turkey jerky kevin leberkas boudin. Meatloaf tri-tip swine sirloin. Kielbasa pig doner beef ribs biltong cow chuck capicola. Rump pig shoulder porchetta. Chuck tail sausage brisket, pastrami shankle burgdoggen tenderloin leberkas turkey. Picanha bresaola capicola pork loin, flank tri-tip ham swine sirloin prosciutto. Ground round chuck jerky turkey pork chop",
          "threads": []
        },
      ],
      "actionItems": [
        {
          "assignedTo": {
            "name": "Rachel",
            "id": "54312df12a54s1osdfmnjg",
            "email": "rachel@boop.com",
            "profileImage": "https://react.semantic-ui.com/images/avatar/small/rachel.png"
          },
          "description": "Please follow up on the CI\CD issue [VSTS - #00928](https://www.microsoft.com)",
          "createdBy": {
            "name": "Matt",
            "id": "525555df12a54s1osdfmnjg",
            "email": "matt@boop.com",
            "profileImage": "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          },
          "date": 1532628000
        },
        {
          "assignedTo": {
            "name": "Nicu",
            "id": "224asdf12a54s1osdfmnjg",
            "email": "nicu@parente.com",
            "profileImage": "https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4"
          },
          "description": "Create a proposal for the RedBull connectivity issue [#532123](https://www.microsoft.com)",
          "createdBy": {
            "name": "Matt",
            "id": "525555df12a54s1osdfmnjg",
            "email": "matt@boop.com",
            "profileImage": "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          },
          "date": 1532628000
        }
      ]
    }
  },
  allStoreEnhachers
);

const root = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, root);