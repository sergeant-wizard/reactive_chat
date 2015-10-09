jest.dontMock('../js/components/ChatApp.react.jsx').dontMock('jquery');

describe('ChatApp', () => {
  const TestUtils = require('react-addons-test-utils');
  const React = require('react');
  const ReactDOM = require('react-dom');
  const ChatApp = require('../js/components/ChatApp.react.jsx');
  const MessageInput = require('../js/components/MessageInput.react.jsx');
  const chatApp = TestUtils.renderIntoDocument(
    <ChatApp />
  );
  it('is initialized in the specified format', () => {
    expect(chatApp.state).toEqual({
      reactMessages: ["yeah", "maybe", "nope"],
      chatMessages: [{
        isBot: true,
        text: 'question... ?'
      }],
      isReactButtonVisible: false,
      isBotTalking: true
    });
  });
  it('accepts message', () => {
    const messageInput = TestUtils.findRenderedComponentWithType(chatApp, MessageInput);
    const button = TestUtils.scryRenderedDOMComponentsWithTag(messageInput, 'button')[0];

    TestUtils.Simulate.click(button);
    expect(chatApp.state.chatMessages.length).toEqual(2);
    expect(chatApp.state.isReactButtonVisible).toEqual(false);
    expect(chatApp.state.isBotTalking).toEqual(true);

    jest.runAllTimers();
    expect(chatApp.state.chatMessages.length).toEqual(3);
  });
});
