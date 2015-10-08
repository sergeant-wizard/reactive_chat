const React = require('react');
const ChatMessage = require("./ChatMessage.react.jsx");

const ChatMessageList = React.createClass({
  render() {
    const messageNodes = this.props.messages.map((message, index) => {
      return (
        <ChatMessage
        key={index}
        text={message.text}
        isBot={message.isBot}
        onAnimationEnd={this.props.onAnimationEnd} />
      );
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
});

module.exports = ChatMessageList;
