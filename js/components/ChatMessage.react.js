"use strict";

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

function messageRow(params) {
  this.initialCSS = params.initialCSS;
  this.animatedCSS = params.animatedCSS;
  this.render = params.render;
  this.getContent = params.getContent;
  this.messageSpacerCol = (
    <div className="col-md-3 col-xs-3">
    </div>
  );
  this.getMessageCol = function(text) {
    return (
      <div className="col-md-9 col-xs-9">
        <div className="well">
          {text}
        </div>
      </div>
    );
  };
  this.getComponent = function() {
    var messageRow = this;
    return React.createClass({
      componentWillAppear: function(callback) {
        var DOMNode = $(this.getDOMNode());
        DOMNode.css(messageRow.initialCSS);
        DOMNode.animate(
          messageRow.animatedCSS,
          250
        );
        callback();
      },
      componentDidAppear: function() {
        console.log("did appear");
      },
      render: function() {
        return messageRow.getContent(this.props.text);
      }
    });
  };
}

var leftMessageRow = new messageRow({
  initialCSS: {
    "opacity": 0,
    "left": "-100px",
    "position": "relative"
  },
  animatedCSS: {
    "opacity": 1,
    "left": "0px",
  },
  getContent: function(text) {
    return (
      <div className="row">
        {this.getMessageCol(text)}
        {this.messageSpacerCol}
      </div>
    );
  }
});

var rightMessageRow = new messageRow({
  initialCSS: {
    "opacity": 0,
    "left": "100px",
    "position": "relative"
  },
  animatedCSS: {
    "opacity": 1,
    "left": "0px"
  },
  getContent: function(text) {
    return (
      <div className="row">
        {this.messageSpacerCol}
        {this.getMessageCol(text)}
      </div>
    );
  }
});

var ChatMessage = React.createClass({
  render: function() {
    var messageRow = this.props.isBot === true ? leftMessageRow : rightMessageRow;
    var MessageComponent = messageRow.getComponent();
    return (
      <div className="container">
        <ReactTransitionGroup transitionName="fadeIn" transitionAppear={true}>
          <MessageComponent text={this.props.text} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ChatMessage;
