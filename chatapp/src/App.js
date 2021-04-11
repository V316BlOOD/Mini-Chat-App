import React from 'react';
import './template.css';
import $ from 'jquery';
import jsxToString from 'jsx-to-string';



function App() {

  return (
    <div id="mainWrapper">
      <MessagesBoard />
      <TypingBar />
    </div>
  );

}

class MessagesBoard extends React.Component {
  render () { 
    return (
      <div id="messagesBoard">
      </div>
    );
  }
}

class TypingBar extends React.Component {

  submitMessage()
  {
    if ($('#messageField').val().length && $('#userField').val().length)
      $('#messagesBoard').append(jsxToString(SendMsg($('#messageField').val(), $('#userField').val())));
    $('#messageField').val('');
  }

  render () {
    return (
      <div id="messagingBar">
          <div className="userContainer">
              <label htmlFor="userField">Pseudo</label>
              <input id="userField" type="text" name="username"/>
          </div>
          <div className="messageContainer">
              <label htmlFor="messageField">Message</label>
              <input id="messageField" type="text" autoComplete="off" name="message"/>
          </div>
          <div className="sendButtonContainer">
                <button onClick={this.submitMessage}> Envoyer </button>
            </div>
      </div>
    );
  }
}

function SendMsg (message, user) {

  // XSS filtration basique
  message = message.replaceAll("<", "&lt;");
  message = message.replaceAll(">", "&gt;");
  user = user.replaceAll("<", "&lt;");
  user = user.replaceAll(">", "&gt;");

  window.socket.send(JSON.stringify({"message":message, "pseudo": user}));
  return (
    <div class="sentMessage">{message}</div>
  );
}

export default App;