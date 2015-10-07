var React = require('react');
var ChatMessageList = require("./ChatMessageList.react.js");
var MessageInput = require("./MessageInput.react.js");

var ChatApp = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <ChatMessageList />
        </div>
        <div className="row">
          <MessageInput />
        </div>
      </div>
    );
  }
});

module.exports = ChatApp;
