let React = require('react');
let ChatMessage = require("./ChatMessage.react.jsx");

let ChatMessageList = React.createClass({
  render() {
    let bindedOnAnimationEnd = this.props.onAnimationEnd;
    let messageNodes = this.props.messages.map((message, index) => {
      return (
        <ChatMessage
        key={index}
        text={message.text}
        isBot={message.isBot}
        onAnimationEnd={bindedOnAnimationEnd} />
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
