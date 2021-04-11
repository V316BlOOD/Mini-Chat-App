import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';
import jsxToString from 'jsx-to-string';

function receiveMsg (username, message) {

  return (
    <div class="receivedMessage">
      <span class="senderName">{username + ':'}</span>
      <span class="message">{message}</span>
    </div>
  );
}

window.host = 'ws://127.0.0.1:8000/ws';
window.socket = new WebSocket(window.host);
window.socket.onmessage = function(frame){

  var parsed = JSON.parse(frame.data);
  var user = parsed.pseudo;
  var message = parsed.message;
  $('#messagesBoard').append(jsxToString(receiveMsg(user, message)));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
