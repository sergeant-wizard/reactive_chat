const React = require('react');
const ReactDOM = require('react-dom');
const ReactTransitionGroup = require('react-addons-transition-group');

class MessageRow {
  static messageCol(text) {
    return (
      <div className="col-md-9 col-xs-9">
        <div className="well">
          {text}
        </div>
      </div>
    );
  }
  static messageSpacerCol() {
    return (
      <div className="col-md-3 col-xs-3">
      </div>
    );
  }
  component() {
    const messageRow = this;
    return React.createClass({
      scrollToBottom() {
        $('html, body').animate(
          {"scrollTop": $(document).height() - $(window).height()},
          100
        );
      },
      componentWillAppear(callback) {
        const DOMNode = $(ReactDOM.findDOMNode(this));
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
      render() {
        return messageRow.getContent(this.props.text);
      }
    });
  }
}

class LeftMessageRow extends MessageRow {
  get initialCSS() {
    return {
      "opacity": 0,
      "left": "-100px",
      "position": "relative"
    };
  }
  get animatedCSS() {
    return {
      "opacity": 1,
      "left": "0px",
    };
  }
  getContent(text) {
    return (
      <div className="row">
        {MessageRow.messageCol(text)}
        {MessageRow.messageSpacerCol()}
      </div>
    );
  }
}

class RightMessageRow extends MessageRow {
  get initialCSS() {
    return {
      "opacity": 0,
      "left": "100px",
      "position": "relative"
    }
  }
  get animatedCSS() {
    return {
      "opacity": 1,
      "left": "0px"
    }
  }
  getContent(text) {
    return (
      <div className="row">
        {MessageRow.messageSpacerCol()}
        {MessageRow.messageCol(text)}
      </div>
    );
  }
}

const ChatMessage = React.createClass({
  render() {
    const getMessageRow = (isBot) => {
      if (isBot) {
        return new LeftMessageRow();
      } else {
        return new RightMessageRow();
      }
    };
    const MessageComponent = getMessageRow(this.props.isBot).component();
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
