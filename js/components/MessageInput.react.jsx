"use strict";

let React = require('react');

let MessageInput = React.createClass({
  getInitialProps() {
    return {isVisible: false};
  },
  onClick(index) {
    this.props.handleReaction(index);
  },
  render() {
    let reactButtons = this.props.reactMessages.map((reactMessage, index) => {
      return (
        <button type="button" className="btn btn-default" key={index} onClick={this.onClick.bind(this, reactMessage)}>
          {reactMessage}
        </button>
      );
    });
    let className = "btn-group pull-right";
    if (this.props.isVisible) {
      className += " visible";
    } else {
      className += " invisible";
    }
    return (
      <div className={className} role="group">
        {reactButtons}
      </div>
    );
  }
});

module.exports = MessageInput;
