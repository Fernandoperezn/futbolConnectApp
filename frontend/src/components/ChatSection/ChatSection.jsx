import React, { useState } from 'react';
import Header from '../Header/Header';
import img from '../../assets/pp.jpg';
import './chatSection.css'

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="dashboard-container">
      <Header user="Fernando" imgProfile={img} titleComp="Chat" />
      <div className="chat-container">
        <div className="messages-list">
          {messages.map((message, index) => (
            <div key={index} className="message-item">
              {message}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
