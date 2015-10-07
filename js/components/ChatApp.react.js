"use strict";

var React = require('react');
var ChatMessageList = require("./ChatMessageList.react.js");
var MessageInput = require("./MessageInput.react.js");

var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      reactMessages: [
        "yeah",
        "maybe",
        "nope"
      ],
      chatMessages: [
        {
          text: "message 1",
          isBot: true
        },
        {
          text: "message 2",
          isBot: false
        }
      ]
    };
  },
  onReactMessageClick: function(index) {
    this.setState(function(previousState, _) {
      previousState.chatMessages.push({
        text: index,
        isBot: false
      });
      return previousState;
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row"><div className="col-md-12">
          <ChatMessageList messages={this.state.chatMessages} />
        </div></div>
        <div className="row"><div className="col-md-12">
          <MessageInput
            reactMessages={this.state.reactMessages}
            handleReaction={this.onReactMessageClick}
          />
        </div></div>
      </div>
    );
  }
});

module.exports = ChatApp;
