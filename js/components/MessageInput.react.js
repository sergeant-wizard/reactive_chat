"use strict";

var React = require('react');

var MessageInput = React.createClass({
  onClick: function(index) {
    this.props.handleReaction(index);
  },
  render: function() {
    var bindedOnClick = function(index) {
      return this.onClick.bind(this, index);
    }.bind(this);
    var reactButtons = this.props.reactMessages.map(function (reactMessage, index) {
      return (
        <button type="button" className="btn btn-default" key={index} onClick={bindedOnClick(index)}>
          {reactMessage}
        </button>
      );
    });
    return (
      <div className="btn-group pull-right" role="group">
        {reactButtons}
      </div>
    );
  }
});

module.exports = MessageInput;
