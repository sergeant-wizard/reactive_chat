"use strict";

var React = require('react');
var ReactTransitionGroup = React.addons.TransitionGroup;

var MessageInput = React.createClass({
  getInitialProps: function() {
    return {isVisible: false};
  },
  onClick: function(index) {
    this.props.handleReaction(index);
  },
  render: function() {
    var bindedOnClick = function(text) {
      return this.onClick.bind(this, text);
    }.bind(this);
    var reactButtons = this.props.reactMessages.map(function (reactMessage, index) {
      return (
        <button type="button" className="btn btn-default" key={index} onClick={bindedOnClick(reactMessage)}>
          {reactMessage}
        </button>
      );
    });
    var className = "btn-group pull-right";
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