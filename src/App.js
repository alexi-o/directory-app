import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay';
import * as firebase from 'firebase';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAf7aTh2U-OtkCKRfg6JjMj1O1uMgyH-1Q",
    authDomain: "blake-team.firebaseapp.com",
    databaseURL: "https://blake-team.firebaseio.com",
    projectId: "blake-team",
    storageBucket: "blake-team.appspot.com",
    messagingSenderId: "564781464990"
  };
  this.app = firebase.initializeApp(config);
  this.database = this.app.database();
}

render() {
  return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
