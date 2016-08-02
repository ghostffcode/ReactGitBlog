import React from 'react';

export default class Post extends React.Component {
  constructor (props) {
    super(props);
  };

  render () {
    let myclass = "card col-md-8 col-sm-12 col-xs-12"
    if (this.props.nkey == 0) {
      myclass = "card col-md-8 col-sm-12 col-xs-12 first";
    }
    return(
      <div className={myclass}>
        <h2><a href="#">{this.props.title}</a></h2>
        <p className="date">By {this.props.name}</p>
        <p className="text">{this.props.content}</p>

      </div>
    );
  }
}
