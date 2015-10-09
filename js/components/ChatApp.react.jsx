var $ = require('jquery');
const BotThinkTime = 1500;
const ReactInputDelay = 1000;

const React = require('react');
const ReactDOM = require('react-dom');
const ChatMessageList = require("./ChatMessageList.react.jsx");
const MessageInput = require("./MessageInput.react.jsx");

const ChatApp = React.createClass({
  callAfterDelay(duration, callback) {
    $(ReactDOM.findDOMNode(this)).stop().delay(duration).queue(callback);
  },
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
    this.setState((previousState, _) => {
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
    this.callAfterDelay(BotThinkTime, () => {
      this.setState({isBotTalking: true});
      this.addMessage({
        text: "yet another question",
        isBot: true
      });
    });
  },
  onAnimationEnd() {
    if (this.state.isBotTalking) {
      // PHASE: WAIT FOR REACTION INPUT
      this.callAfterDelay(ReactInputDelay, () => {
        this.setState({isReactButtonVisible: true});
      });
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
