var React = require('react');
var ChatMessageList = require("./ChatMessageList.react.js");
var MessageInput = require("./MessageInput.react.js");

var ChatApp = React.createClass({
  render: function() {
    var reactMessages = [
      "yeah",
      "maybe",
      "nope"
    ];
    return (
      <div className="container">
        <div className="row"><div className="col-md-12">
          <ChatMessageList />
        </div></div>
        <div className="row"><div className="col-md-12">
          <MessageInput reactMessages={reactMessages} />
        </div></div>
      </div>
    );
  }
});

module.exports = ChatApp;
