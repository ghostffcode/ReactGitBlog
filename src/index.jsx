//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// import the post Component
import Post from "./Components/Post";

// Import the firebase App Modules
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Firebase Configuration
let FireConfig = {
  apiKey: "AIzaSyCaTbuPESNwOw9s-zmvJ4gb7BwRFvhKzf4",
  authDomain: "gitblog-d68cd.firebaseapp.com",
  databaseURL: "https://gitblog-d68cd.firebaseio.com",
  storageBucket: "gitblog-d68cd.appspot.com",
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
    let commentsRef = firebase.database().ref('posts/').limitToFirst(10);
    commentsRef.on('value', function(data) {
      x.setState({
        post : data.val()
      });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
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
