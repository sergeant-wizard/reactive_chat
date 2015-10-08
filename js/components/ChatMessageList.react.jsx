var React = require('react');
var ChatMessage = require("./ChatMessage.react.jsx");

var ChatMessageList = React.createClass({
  render: function() {
    var bindedOnAnimationEnd = this.props.onAnimationEnd;
    var messageNodes = this.props.messages.map(function (message, index) {
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
