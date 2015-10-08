"use strict";

let React = require('react');
let ChatMessageList = require("./ChatMessageList.react.jsx");
let MessageInput = require("./MessageInput.react.jsx");

let ChatApp = React.createClass({
  getInitialState() {
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
  componentDidMount() {
    // PHASE: ASK
    this.addMessage({
      text: "question... ?",
      isBot: true
    });
  },
  addMessage(message) {
    this.setState(function(previousState, _) {
      previousState.chatMessages.push(message);
      return previousState;
    });
  },
  onReactMessageClick(text) {
    // PHASE: PAUSE AND THINK
    this.setState({isReactButtonVisible: false});
    this.addMessage({
      text: text,
      isBot: false
    });
    setTimeout(
      function() {
        this.setState({isBotTalking: true});
        this.addMessage({
          text: "yet another question",
          isBot: true
        });
      }.bind(this),
      1500
    );
  },
  onAnimationEnd() {
    if (this.state.isBotTalking) {
      // PHASE: WAIT FOR REACTION INPUT
      setTimeout(
        function() {
          this.setState({isReactButtonVisible: true});
        }.bind(this),
        1000
      );
      this.setState({isBotTalking: false});
    }
  },
  render() {
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
