var React = require('react');

var MessageInput = React.createClass({
  render: function() {
    var reactButtons = this.props.reactMessages.map(function (reactMessage, index) {
      return (
        <button type="button" className="btn btn-default" key={index}>{reactMessage}</button>
      );
    });
    return (
      <div className="btn-group pull-right" role="group">
        {reactButtons}
      </div>
    );
  }
});

module.exports = MessageInput;
