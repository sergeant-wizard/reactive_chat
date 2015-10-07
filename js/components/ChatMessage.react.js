"use strict";

var React = require('react');

function getMessageRow(text, isBot) {
  var mainMessageCol = (
    <div className="col-md-9 col-xs-9">
      <div className="well">
        {text}
      </div>
    </div>
  );
  var messageSpacerCol = (
    <div className="col-md-3 col-xs-3">
    </div>
  );
  if (isBot) {
    return (
      <div className="row">
        {mainMessageCol}
        {messageSpacerCol}
      </div>
    );
  } else {
    return (
      <div className="row">
        {messageSpacerCol}
        {mainMessageCol}
      </div>
    );
  }
}

var ChatMessage = React.createClass({
  render: function() {
    return (
      <div className="container">
        {getMessageRow(this.props.text, this.props.isBot)}
      </div>
    );
  }
});

module.exports = ChatMessage;
