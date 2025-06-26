import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const calculateTotalLikes = (messages) => {
  return messages.reduce((total, msg) => {
    return total + (msg.liked ? 1 : 0);
  }, 0);
};

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleLike = (id) => {
    const updatedMessages = messages.map((msg) => {
      if (msg.id === id) {
        return { ...msg, liked: !msg.liked };
      } else {
        return msg;
      }
    });
    setMessages(updatedMessages);
  };

  const totalLikes = calculateTotalLikes(messages);

  return (
    <div id='App'>
      <header>
        <h1>React Chatlog</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
