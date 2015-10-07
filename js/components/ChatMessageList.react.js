var React = require('react');
var ChatMessage = require("./ChatMessage.react.js");

var ChatMessageList = React.createClass({
  render: function() {
    var messages = [
      "message 1",
      "message 2"
    ];
    var messageNodes = messages.map(function (message, index) {
      return (
        <ChatMessage
        key={index}
        message={message} />
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
