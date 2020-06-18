import React, {Component} from 'react';
import './App.css';
import * as firebase from "firebase";
import { O2A } from 'object-to-array-convert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const scoreboardRef = firebase.database().ref().child('scoreboard');
    var tempUsers = [];
    scoreboardRef.once("value")
        .then((snapshot) => {
          tempUsers = O2A(snapshot);
          var i;
          for(i = 0; i < tempUsers.length; i++) {
              console.log(tempUsers[i].score)
          }
            const sortObjectsArray = require('sort-objects-array');
            sortObjectsArray(tempUsers, 'score', 'desc');
          this.setState({users: tempUsers});
          console.log(tempUsers)
        });
    };

  render() {
    return (
        <div>
          <ol>
              {this.state.users.map(user => {
                  return <li>{user.name + ": " + user.score}</li>
              })}
          </ol>
        </div>
    )
  }
}

export default App;