"use strict";

var React = require('react');

var ChatMessage = React.createClass({
  getInitialState: function() {
    return {
      message: ""
    };
  },
  render: function() {
    return (
      <div className="well">
        {this.props.message}
      </div>
    );
  }
});

module.exports = ChatMessage;
