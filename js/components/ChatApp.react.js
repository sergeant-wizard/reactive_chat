var React = require('react');
var ChatMessage = require("./ChatMessage.react.js");
var MessageInput = require("./MessageInput.react.js");

var ChatApp = React.createClass({
  render: function() {
    return (
      <div>
        <ChatMessage />
        <MessageInput />
      </div>
    );
  }
});

module.exports = ChatApp;
