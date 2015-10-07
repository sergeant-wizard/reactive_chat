var React = require('react');
var ChatMessage = require("./ChatMessage.react.js");

var ChatMessageList = React.createClass({
  render: function() {
    var messageNodes = this.props.messages.map(function (message, index) {
      return (
        <ChatMessage
        key={index}
        text={message.text}
        isBot={message.isBot} />
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
