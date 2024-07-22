import { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-envelope"></i>
        <i className="fa-regular fa-comment"></i>
        <i className="fa-solid fa-user-gear"></i>
      </div>
      <div className="chat-box">
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Schreibe eine Nachricht..."
          />
          <button type="submit" className="submit-button">
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
