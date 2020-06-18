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
              tempUsers[i].score = Number.parseInt(tempUsers[i].score, 10);
          }
          tempUsers.sort((a, b) => (a.score < b.score) ? 1 : (a.score === b.score) ? ((a.score < b.score) ? 1 : -1) : -1 );
          this.setState({users: tempUsers});
          console.log(tempUsers)
        });
    };

    ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

  render() {
    return (
        <div align="center" background="">
            <h1>Bone Blast Scoreboard</h1>
            <table border>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                {this.state.users.map((user, index) => {
                    return <tr>
                        <td align="right" className="place">{this.ordinal_suffix_of(index+1)}</td>
                        <td align="left">{user.name}</td>
                        <td align="left">{user.score}</td>
                    </tr>
                })}
            </table>
        </div>
    )
  }
}

export default App;