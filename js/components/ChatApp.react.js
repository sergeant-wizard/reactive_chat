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
      chatMessages: [],
      isReactButtonVisible: false,
      isBotTalking: true
    };
  },
  componentDidMount: function() {
    // PHASE: ASK
    this.addMessage({
      text: "question... ?",
      isBot: true
    });
  },
  addMessage: function(message) {
    this.setState(function(previousState, _) {
      previousState.chatMessages.push(message);
      return previousState;
    });
  },
  onReactMessageClick: function(index) {
    // PHASE: PAUSE AND THINK
    this.setState({isReactButtonVisible: false});
    this.addMessage({
      text: index,
      isBot: false
    });
  },
  onAnimationEnd: function() {
    if (this.state.isBotTalking) {
      // PHASE: WAIT FOR REACTION INPUT
      setTimeout(
        function() {
          this.setState({isReactButtonVisible: true});
        }.bind(this),
        1000
      );
      this.setState({isBotTalking: false});
    } else {
    }
  },
  render: function() {
    return (
      <div className="container">
        <div className="row"><div className="col-md-12">
          <ChatMessageList
            messages={this.state.chatMessages}
            onAnimationEnd={this.onAnimationEnd} />
        </div></div>
        <div className="row"><div className="col-md-12">
          <MessageInput
            reactMessages={this.state.reactMessages}
            handleReaction={this.onReactMessageClick}
            isVisible={this.state.isReactButtonVisible}
          />
        </div></div>
      </div>
    );
  }
});

module.exports = ChatApp;
