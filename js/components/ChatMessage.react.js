"use strict";

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

function getChatMessageClass(isBot) {
  var chatMessageClass = "well";
  if (isBot) {
    chatMessageClass += " leftMessage";
  } else {
    chatMessageClass += " rightMessage";
  }
  return chatMessageClass;
}

function getMessageRow(text, isBot) {
  // note that the key attribute is required for ReactCSSTransitionGroup
  var mainMessageCol = (
    <div className="col-md-9 col-xs-9">
      <ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        <div key="1" className={getChatMessageClass(isBot)}>
          {text}
        </div>
      </ReactCSSTransitionGroup>
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
