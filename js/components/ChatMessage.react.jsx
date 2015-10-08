"use strict";

let React = require('react');
let ReactDOM = require('react-dom');
let ReactTransitionGroup = require('react-addons-transition-group');

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
  this.getComponent = () => {
    let messageRow = this;
    return React.createClass({
      scrollToBottom() {
        $('html, body').animate(
          {"scrollTop": $(document).height() - $(window).height()},
          100
        );
      },
      componentWillAppear(callback) {
        let DOMNode = $(ReactDOM.findDOMNode(this));
        DOMNode.css(messageRow.initialCSS);
        DOMNode.animate(
          messageRow.animatedCSS,
          250,
          callback
        );
        this.scrollToBottom();
      },
      componentDidAppear() {
        this.props.onAnimationEnd();
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
  getContent(text) {
    return (
      <div className="row">
        {this.getMessageCol(text)}
        {this.messageSpacerCol}
      </div>
    );
  }
});

let rightMessageRow = new messageRow({
  initialCSS: {
    "opacity": 0,
    "left": "100px",
    "position": "relative"
  },
  animatedCSS: {
    "opacity": 1,
    "left": "0px"
  },
  getContent(text) {
    return (
      <div className="row">
        {this.messageSpacerCol}
        {this.getMessageCol(text)}
      </div>
    );
  }
});

let ChatMessage = React.createClass({
  render() {
    let messageRow = this.props.isBot === true ? leftMessageRow : rightMessageRow;
    let MessageComponent = messageRow.getComponent();
    return (
      <div className="container">
        <ReactTransitionGroup>
          <MessageComponent
            text={this.props.text}
            onAnimationEnd={this.props.onAnimationEnd} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ChatMessage;
