var React = require('react');

var MessageInput = React.createClass({
  render: function() {
    return (
      <div className="btn-group pull-right" role="group">
        <button type="button" className="btn btn-default">Left</button>
        <button type="button" className="btn btn-default">Middle</button>
        <button type="button" className="btn btn-default">Right</button>
      </div>
    );
  }
});

module.exports = MessageInput;
