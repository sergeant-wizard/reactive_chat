jest.dontMock('../js/components/ChatApp.react.jsx').dontMock('jquery');

describe('ChatApp', () => {
  it('can be rendered', () => {
    const TestUtils = require('react-addons-test-utils');
    const React = require('react');
    const ReactDOM = require('react-dom');
    const ChatApp = require('../js/components/ChatApp.react.jsx');

    const chatApp = TestUtils.renderIntoDocument(
      <ChatApp />
    );
    expect(ReactDOM.findDOMNode(chatApp)).toBeTruthy();
  });
});
