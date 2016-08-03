//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// import the post Component
import Post from "./Components/Post";

// Import the firebase App Modules
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// import config file
import config from "./config";

// Firebase Configuration
let FireConfig = {
  apiKey: config.Key,
  authDomain: config.Domain,
  databaseURL: config.DB,
  storageBucket: config.Storage,
};

firebase.initializeApp(FireConfig);

class UserGist extends React.Component {
  constructor (props) {
    super(props);
    this.state =  {
        post : []
    }
  }

  createComp() {
    var arr = [];
    this.state.post.forEach((v, i) => {
      arr.push(<Post key={i} nkey={i} name={v.Author.name} title={v.title} content={v.content} />);
    });
    return arr;
  }

  componentDidMount() {
    let x = this;
    let commentsRef = firebase.database().ref('posts/').orderByChild('id').startAt().limitToLast(10);
    commentsRef.on('value', function(data) {
      x.setState({
        post : data.val().reverse()
      });
    });
  }

  render() {
    return (
      <div>
        {this.createComp()}
      </div>
    );
  }

}

ReactDOM.render(<UserGist />, document.querySelector("#app"));
