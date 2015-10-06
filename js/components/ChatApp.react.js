var React = require('react');
var ChatMessageList = require("./ChatMessageList.react.js");
var MessageInput = require("./MessageInput.react.js");

var ChatApp = React.createClass({
  render: function() {
    return (
      <div>
        <ChatMessageList />
        <MessageInput />
      </div>
    );
  }
});

module.exports = ChatApp;
